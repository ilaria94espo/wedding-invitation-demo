-- RSVP setup for the wedding invitation template.
-- Run this once in Supabase SQL Editor.
-- It is safe to run again.

create extension if not exists pgcrypto;

create table if not exists public.rsvps (
  id uuid primary key default gen_random_uuid(),
  event_id text not null,
  name text not null,
  attending boolean not null,
  guests integer not null default 1,
  dietary text,
  created_at timestamptz not null default now()
);

alter table public.rsvps enable row level security;

grant insert on public.rsvps to anon, authenticated;
grant select on public.rsvps to authenticated;

-- Public guests can submit an RSVP, but cannot read the RSVP table.
drop policy if exists "Allow public RSVP submissions" on public.rsvps;
create policy "Allow public RSVP submissions"
on public.rsvps
for insert
to anon, authenticated
with check (true);

-- Keep RSVP results private to authenticated/admin users.
drop policy if exists "Allow authenticated admins to read RSVPs" on public.rsvps;
create policy "Allow authenticated admins to read RSVPs"
on public.rsvps
for select
to authenticated
using (true);

-- Remove old duplicate rows, keeping the earliest confirmation.
with ranked as (
  select
    id,
    row_number() over (
      partition by event_id, lower(trim(name))
      order by created_at asc, id asc
    ) as row_number
  from public.rsvps
)
delete from public.rsvps as r
using ranked as d
where r.id = d.id
  and d.row_number > 1;

-- Prevent future duplicates for the same event + normalized name.
create unique index if not exists rsvps_event_name_unique
on public.rsvps (event_id, lower(trim(name)));
