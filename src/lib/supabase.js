import { createClient } from '@supabase/supabase-js'

const key = import.meta.env.VITE_SUPABASE_ANON_KEY
const prodUrl = import.meta.env.VITE_SUPABASE_URL

// En desarrollo usamos el proxy de Vite para evitar el error SSL corporativo
const url = import.meta.env.DEV
  ? `${window.location.origin}/supabase-api`
  : prodUrl

export const supabase = (url && key)
  ? createClient(url, key)
  : { from: () => ({ insert: async () => ({}), select: async () => ({ data: [], error: null }) }) }
