import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://lnknqetgjalpgwrdtrrz.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxua25xZXRnamFscGd3cmR0cnJ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTYyNzcwNTIsImV4cCI6MjA3MTg1MzA1Mn0.VMRsuN4vVN1J0xjHW4JDoY5PwTpl67hPtgwDwdj7KJQ';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  db: {
    schema: 'public'
  },
  auth: {
    persistSession: false
  }
});
