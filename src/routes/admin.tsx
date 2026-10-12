
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/admin')({
  component: AdminPage,
})

function AdminPage() {
  return (
    <div style={{ padding: '40px', fontFamily: 'sans-serif' }}>
      <h1>صفحة الأدمن شغالة يا محمد 🎉</h1>
      <p>كده الـ Routing والـ Deploy تمام. فاضل نرجع الكود الأصلي ونعمل Auth.</p>
    </div>
  )
}
