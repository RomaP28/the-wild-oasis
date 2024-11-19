import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://kymtbusykcvuahoaiayz.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt5bXRidXN5a2N2dWFob2FpYXl6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzIwMjQxMDgsImV4cCI6MjA0NzYwMDEwOH0.9FhyU5gUXIhOSUx56JFm0neou_y58QVIeoOvuVKuwCk'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;