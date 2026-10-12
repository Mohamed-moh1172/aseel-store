"use client";
import { useState, useRef } from "react";
import { UploadButton } from "@uploadthing/react";
import type { OurFileRouter } from "../api/uploadthing/core";

export default function AdminDashboard({ 
  products, config, createProduct, updateProduct, deleteProduct, updateContacts 
}: any) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  async function handleCamera() {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  }

  async function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    
    // هنرفع الصورة مباشر من الكاميرا لـ UploadThing
    const formData = new FormData();
    formData.append("files", file);
    
    const res = await fetch("/api/uploadthing", {
      method: "POST",
      body: formData,
    });
    
    const data = await res.json();
    setImage(data[0].url);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", price);
    formData.append("image", image);
    formData.append("category", category);
    
    if (editingId) {
      await updateProduct(editingId, formData);
    } else {
      await createProduct(formData);
    }
    
    setName(""); setPrice(""); setCategory(""); setImage(""); setEditingId(null);
  }

  function handleEdit(p: any) {
    setEditingId(p.id);
    setName(p.name);
    setPrice(p.price.toString());
    setCategory(p.category);
    setImage(p.image);
  }

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">لوحة تحكم أصيل ستور</h1>
      
      {/* فورم اضافة/تعديل منتج */}
      <form onSubmit={handleSubmit} className="bg-gray-100 p-4 rounded-lg mb-8">
        <h2 className="text-xl mb-4">{editingId? "تعديل منتج" : "اضافة منتج جديد"}</h2>
        
        <input 
          value={name} onChange={e => setName(e.target.value)}
          placeholder="اسم المنتج" 
          className="w-full p-2 mb-2 border rounded" required 
        />
        
        <input 
          value={price} onChange={e => setPrice(e.target.value)}
          placeholder="السعر" type="number" step="0.01"
          className="w-full p-2 mb-2 border rounded" required 
        />
        
        <input 
          value={category} onChange={e => setCategory(e.target.value)}
          placeholder="القسم" 
          className="w-full p-2 mb-2 border rounded" required 
        />

        <div className="flex gap-2 mb-2">
          <input 
            value={image} onChange={e => setImage(e.target.value)}
            placeholder="رابط الصورة" 
            className="flex-1 p-2 border rounded" 
          />
          
          <button 
            type="button" onClick={handleCamera}
            className="bg-blue-500 text-white px-4 rounded"
          >
            📷 صور من الكاميرا
          </button>
        </div>
        
        <input 
          ref={fileInputRef} type="file" accept="image/*" 
          capture="environment" onChange={handleFileChange}
          className="hidden" 
        />

        <UploadButton<OurFileRouter, "imageUploader">
          endpoint="imageUploader"
          onClientUploadComplete={(res) => setImage(res[0].url)}
          appearance={{ button: "bg-green-500 text-white px-4 py-2 rounded" }}
        />

        {image && <img src={image} className="w-32 h-32 object-cover mt-2 rounded" />}

        <button type="submit" className="bg-black text-white px-6 py-2 rounded mt-4">
          {editingId? "حفظ التعديل" : "اضافة المنتج"}
        </button>
      </form>

      {/* فورم بيانات التواصل */}
      <form action={updateContacts} className="bg-gray-100 p-4 rounded-lg mb-8">
        <h2 className="text-xl mb-4">بيانات التواصل</h2>
        <input name="whatsapp" defaultValue={config?.whatsapp || ""} placeholder="رقم واتساب" className="w-full p-2 mb-2 border rounded" />
        <input name="telegram" defaultValue={config?.telegram || ""} placeholder="يوزر تليجرام" className="w-full p-2 mb-2 border rounded" />
        <input name="instagram" defaultValue={config?.instagram || ""} placeholder="رابط انستجرام" className="w-full p-2 mb-2 border rounded" />
        <input name="phone" defaultValue={config?.phone || ""} placeholder="رقم الموبايل" className="w-full p-2 mb-2 border rounded" />
        <button className="bg-black text-white px-6 py-2 rounded">حفظ البيانات</button>
      </form>

      {/* جدول المنتجات */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map((p: any) => (
          <div key={p.id} className="border rounded-lg p-3">
            <img src={p.image} className="w-full h-40 object-cover rounded mb-2" />
            <h3 className="font-bold">{p.name}</h3>
            <p className="text-gray-600">{p.price} جنيه</p>
            <p className="text-sm text-gray-500">{p.category}</p>
            <div className="flex gap-2 mt-2">
              <button onClick={() => handleEdit(p)} className="bg-yellow-500 text-white px-3 py-1 rounded text-sm">تعديل</button>
              <button onClick={() => deleteProduct(p.id)} className="bg-red-500 text-white px-3 py-1 rounded text-sm">حذف</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
