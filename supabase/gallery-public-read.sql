-- Allows the public invitation to list photos inside event-gallery.
-- The bucket itself remains public for image delivery.
create policy "Allow public wedding gallery listing"
on storage.objects
for select
to anon, authenticated
using (
  bucket_id = 'event-gallery'
);
