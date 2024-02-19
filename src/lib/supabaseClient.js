import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  //"https://bfksrkisrcqyxiebjsiw.supabase.co",
  //"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJma3Nya2lzcmNxeXhpZWJqc2l3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDI5OTk2MTQsImV4cCI6MjAxODU3NTYxNH0.DU6Z-EZ8aA1OTDHvU8FglhRQC9AAudgH-luOMy5cN8M"
  process.env.REACT_APP_SUPABASE_URL,
  process.env.REACT_APP_SUPABASE_ANON_KEY
);
