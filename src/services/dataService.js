import { supabase, getStorageImageUrl } from '../lib/supabaseClient';
import { placementsData as fallbackPlacements } from '../data/placements';
import { achievementsData as fallbackAchievements } from '../data/achievements';

/**
 * Normalize database row objects so camelCase property names match JS expectations
 */
const normalizePlacementRow = (row) => ({
  regNo: row.regNo || row.regno || '',
  student: row.student || '',
  department: row.department || 'IT',
  status: row.status || 'Placed',
  company: row.company || '',
  package: typeof row.package === 'number' ? row.package : (parseInt(String(row.package || '').replace(/[^0-9]/g, ''), 10) || 0)
});

const normalizeAchievementRow = (row) => ({
  id: row.id || '',
  year: row.year || '',
  yearTagline: row.yearTagline || row.yeartagline || '',
  students: Array.isArray(row.students) ? row.students : [],
  registerNumbers: Array.isArray(row.registerNumbers || row.registernumbers) ? (row.registerNumbers || row.registernumbers) : [],
  competition: row.competition || '',
  category: row.category || '',
  achievement: row.achievement || '',
  badge: row.badge || '',
  level: row.level || '',
  organizer: row.organizer || '',
  date: row.date || '',
  location: row.location || '',
  recognition: row.recognition || '',
  teamName: row.teamName || row.teamname || '',
  prizeINR: Number(row.prizeINR || row.prizeinr || 0),
  prizeUSD: Number(row.prizeUSD || row.prizeusd || 0),
  prizeDisplay: row.prizeDisplay || row.prizedisplay || '',
  shortDesc: row.shortDesc || row.shortdesc || '',
  problemStatement: row.problemStatement || row.problemstatement || ''
});

/**
 * Fetch Placements from Supabase 'placements' table
 * Falls back to local dataset if Supabase is offline or unconfigured
 */
export const getPlacementsData = async () => {
  if (!supabase) {
    console.log("ℹ️ Using local verified placements dataset.");
    return fallbackPlacements;
  }

  try {
    const { data, error } = await supabase
      .from('placements')
      .select('*');

    if (error || !data || data.length === 0) {
      console.warn("⚠️ Supabase query warning, using local placements fallback:", error?.message);
      return fallbackPlacements;
    }

    return data.map(normalizePlacementRow);
  } catch (err) {
    console.warn("⚠️ Supabase connection error, defaulting to local placements:", err.message);
    return fallbackPlacements;
  }
};

/**
 * Fetch Achievements from Supabase 'achievements' table
 * Falls back to local dataset if Supabase is offline or unconfigured
 */
export const getAchievementsData = async () => {
  if (!supabase) {
    console.log("ℹ️ Using local verified achievements dataset.");
    return fallbackAchievements;
  }

  try {
    const { data, error } = await supabase
      .from('achievements')
      .select('*');

    if (error || !data || data.length === 0) {
      console.warn("⚠️ Supabase query warning, using local achievements fallback:", error?.message);
      return fallbackAchievements;
    }

    return data.map(normalizeAchievementRow);
  } catch (err) {
    console.warn("⚠️ Supabase connection error, defaulting to local achievements:", err.message);
    return fallbackAchievements;
  }
};

/**
 * Resolve image URL from Supabase Storage or fallback to local static asset
 */
export const getAssetImageUrl = (imageKey, localFallbackPath) => {
  const remoteUrl = getStorageImageUrl('Image', imageKey);
  return remoteUrl || localFallbackPath;
};
