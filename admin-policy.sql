-- RSVP dashboard: allow signed-in organizers to read RSVP rows.
-- Run this in Supabase SQL Editor after creating your organizer account.

create policy "Allow authenticated admins to read RSVPs"
on public.rsvps
for select
to authenticated
using (true);
