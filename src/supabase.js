import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://ibdbqmcuycrgjncizsia.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImliZGJxbWN1eWNyZ2puY2l6c2lhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDM4NDg0NzksImV4cCI6MjAxOTQyNDQ3OX0.jNQ7LYfy-yJ5jL5WVgjfbQz9ghuj8JBo0l5P1GYnykg";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
