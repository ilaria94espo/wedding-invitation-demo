// Supabase public configuration.
// The publishable key is intended for browser use.
// Keep Row Level Security (RLS) enabled on the database.
const SUPABASE_URL = "https://bcazcwmsqxqlrjnebrlm.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_Cm9MZj4EE-rHipFhJRncsw_0tHtHM32";

const supabaseClient = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_PUBLISHABLE_KEY
);
