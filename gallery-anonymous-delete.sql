-- Session-only photo deletion for the public wedding invitation.
--
-- BEFORE running this SQL, enable Anonymous Sign-Ins in:
-- Supabase Dashboard -> Authentication -> Providers -> Anonymous Sign-Ins.
--
-- The website signs visitors in anonymously. Supabase then stores the
-- anonymous user's UUID in storage.objects.owner_id. The DELETE policy below
-- allows a visitor to delete only objects owned by their own anonymous user.

-- Make sure authenticated anonymous users can upload to the event gallery.
drop policy if exists "Authenticated users can upload event gallery images" on storage.objects;
create policy "Authenticated users can upload event gallery images"
on storage.objects
for insert
to authenticated
with check (bucket_id = 'event-gallery');

-- Remove any old broad authenticated DELETE policy from earlier versions.
drop policy if exists "Authenticated users can delete event gallery images" on storage.objects;

-- A visitor may delete only their own Storage objects in this bucket.
create policy "Guests can delete only their own wedding photos"
on storage.objects
for delete
to authenticated
using (
  bucket_id = 'event-gallery'
  and owner_id = (select auth.uid()::text)
);

-- The public listing policy remains as before. Do not add a public DELETE policy.
