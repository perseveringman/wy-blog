import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL
const supabaseAnonKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// 获取所有相册
export async function getAlbums() {
  const { data, error } = await supabase
    .from('albums')
    .select('*')
    .order('created_at', { ascending: false })

  if (error)
    throw error
  return data
}

// 获取特定相册的照片
export async function getPhotosByAlbumId(albumId) {
  const { data, error } = await supabase
    .from('photos')
    .select('*')
    .eq('album_id', albumId)
    .order('created_at', { ascending: false })

  if (error)
    throw error
  return data
}
