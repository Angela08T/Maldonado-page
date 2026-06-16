import { createClient } from '@supabase/supabase-js'

const key = import.meta.env.VITE_SUPABASE_ANON_KEY

// En desarrollo usamos el proxy de Vite para evitar el error SSL corporativo
const url = import.meta.env.DEV
  ? `${window.location.origin}/supabase-api`
  : import.meta.env.VITE_SUPABASE_URL

export const supabase = createClient(url, key)
