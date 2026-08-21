// Maps each hackathon photo in the Supabase `Image` storage bucket to the
// `achievements` row it illustrates.
//
// `imageKey` must match the storage object name exactly. All four keys below
// were verified against the live bucket: each returns HTTP 200 image/jpeg, and
// `getPublicUrl` percent-encodes the spaces in the Mastra filename correctly.
// Note the capital "H" — the objects are `Hackathon_*`, not `hackathon_*`.
//
// Matching prefers `achievementId` because two rows share the BuildFest name
// (a 1st Prize and a 3rd Prize entry); `competition` is the documented fallback.
//
// `accent` must be one of the jewel inks the scene knows: brass, oxblood,
// verdigris, sapphire. Each plate takes a different ink so the carousel
// changes colour as it advances.
export const hackathonFeatures = [
  {
    imageKey: 'Hackathon_Buildfest.jpg',
    achievementId: 'ii-2',
    competition: "BuildFest '26",
    accent: 'brass'
  },
  {
    imageKey: 'Hackathon_IIM.jpg',
    achievementId: 'iii-7',
    competition: 'Student Innovation & Product Summit (SIPS)',
    accent: 'sapphire'
  },
  {
    imageKey: 'Hackathon_Mastra AI 2026.jpg',
    achievementId: 'iii-6',
    competition: 'HiDevs × Mastra Hackathon',
    accent: 'verdigris'
  },
  {
    imageKey: 'Hackathon_Moonshot.jpg',
    achievementId: 'ii-3',
    competition: 'Moonshot Hackathon 2026',
    accent: 'oxblood'
  }
];

const normalise = (s) =>
  String(s || '')
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '');

/**
 * Pair each configured feature with its achievements row.
 * Falls back to a normalised competition-name match when the id is absent,
 * and drops features whose row cannot be found rather than rendering a blank card.
 */
export const resolveHackathonFeatures = (achievements = []) =>
  hackathonFeatures
    .map((feature) => {
      const row =
        achievements.find((a) => a.id === feature.achievementId) ||
        achievements.find((a) => normalise(a.competition) === normalise(feature.competition));
      return row ? { ...feature, row } : null;
    })
    .filter(Boolean);
