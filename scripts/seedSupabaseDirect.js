import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';
import { placementsData } from '../src/data/placements.js';
import { achievementsData } from '../src/data/achievements.js';

// Auto-load .env file if process.env isn't pre-populated
const envPath = path.resolve(process.cwd(), '.env');
if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, 'utf8');
  envContent.split('\n').forEach(line => {
    const match = line.match(/^\s*([\w.-]+)\s*=\s*(.*)?\s*$/);
    if (match) {
      const key = match[1];
      let value = match[2] || '';
      if (value.length > 0 && value.startsWith('"') && value.endsWith('"')) {
        value = value.substring(1, value.length - 1);
      }
      process.env[key] = value.trim();
    }
  });
}

const supabaseUrl = process.env.VITE_SUPABASE_URL || 'https://wxnsxchekujedcnmfnin.supabase.co';
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.VITE_SUPABASE_ANON_KEY || '';

if (!supabaseKey) {
  console.error("❌ Error: SUPABASE_SERVICE_ROLE_KEY or VITE_SUPABASE_ANON_KEY environment variable is required.");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function seedDatabase() {
  console.log("🚀 Starting Supabase Database Seeding...");

  // 1. Seed Placements Data
  console.log(`📦 Seeding ${placementsData.length} Placement records...`);
  const { data: placementRes, error: placementErr } = await supabase
    .from('placements')
    .upsert(placementsData, { onConflict: 'regNo' });

  if (placementErr) {
    console.error("❌ Error seeding placements:", placementErr.message);
    console.log("💡 Tip: Make sure the 'placements' table is created in Supabase SQL Editor using supabase_schema.sql");
  } else {
    console.log("✅ Placements seeded successfully!");
  }

  // 2. Seed Achievements Data
  console.log(`🏆 Seeding ${achievementsData.length} Achievement records...`);
  const { data: achievementRes, error: achievementErr } = await supabase
    .from('achievements')
    .upsert(achievementsData, { onConflict: 'id' });

  if (achievementErr) {
    console.error("❌ Error seeding achievements:", achievementErr.message);
    console.log("💡 Tip: Make sure the 'achievements' table is created in Supabase SQL Editor using supabase_schema.sql");
  } else {
    console.log("✅ Achievements seeded successfully!");
  }

  console.log("🎉 Seeding script execution complete!");
}

seedDatabase();
