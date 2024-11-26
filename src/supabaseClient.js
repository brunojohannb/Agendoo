import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = "https://zlhedguqhmdhfkjzcvpk.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpsaGVkZ3VxaG1kaGZranpjdnBrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzI1OTI0NTIsImV4cCI6MjA0ODE2ODQ1Mn0.i16KGsEFHyC2eqRDF0-4UQQgbB2mmoECrSIpAvKtnoM";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);