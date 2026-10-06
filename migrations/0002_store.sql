create table if not exists products (
  id text primary key,
  name_ar text not null,
  name_en text not null,
  category text not null,
  price integer not null,
  compare_at integer,
  image text not null,
  gallery text not null default '[]',
  blurb text not null default '',
  description text not null default '',
  details text not null default '[]',
  is_new boolean not null default false,
  badge text,
  created_at timestamptz not null default now()
);

create table if not exists store_admins (
  user_id text primary key,
  created_at timestamptz not null default now()
);

create index if not exists products_category_idx on products (category);
