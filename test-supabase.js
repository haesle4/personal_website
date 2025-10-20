import { supabase } from './src/supabase.js';

async function testSupabase() {
  console.log('Testing Supabase connection...');
  
  try {
    // Test basic connection
    const { data, error } = await supabase
      .from('Personal Website Projects')
      .select('*')
      .limit(1);
    
    if (error) {
      console.error('Supabase error:', error);
    } else {
      console.log('Successfully connected to Supabase!');
      console.log('Projects table data:', data);
    }
  } catch (err) {
    console.error('Connection error:', err);
  }
}

testSupabase();
