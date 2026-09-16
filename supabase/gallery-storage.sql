insert into storage.buckets (id,name,public) values ('event-gallery','event-gallery',true) on conflict (id) do update set public=true;
create policy "Authenticated users can upload event gallery images" on storage.objects for insert to authenticated with check (bucket_id='event-gallery');
create policy "Authenticated users can update event gallery images" on storage.objects for update to authenticated using (bucket_id='event-gallery') with check (bucket_id='event-gallery');
create policy "Authenticated users can delete event gallery images" on storage.objects for delete to authenticated using (bucket_id='event-gallery');


-- Public guest uploads for the invitation website.
create policy "Public guests can upload event gallery images"
on storage.objects
for insert
to anon
with check (bucket_id = 'event-gallery');
