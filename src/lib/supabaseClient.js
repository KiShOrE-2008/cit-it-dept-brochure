import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://wxnsxchekujedcnmfnin.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

export const supabase = supabaseUrl && supabaseAnonKey
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

// Helper to get public URL for images stored in Supabase Storage buckets
// Default bucket is 'Image' (matching the actual Supabase storage bucket)
export const getStorageImageUrl = (bucketName = 'Image', path) => {
  if (!supabase || !path) return null;
  
  // If already a full http/https URL, return directly
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }

  const { data } = supabase.storage.from(bucketName).getPublicUrl(path);
  return data?.publicUrl || null;
};
