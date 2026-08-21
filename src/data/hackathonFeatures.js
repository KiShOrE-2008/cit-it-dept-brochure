// Maps each hackathon photo in the Supabase `Image` storage bucket to the
// `achievements` row it illustrates.
//
// `imageKey` MUST match the storage object name exactly. These four keys are
// inferred and NOT yet verified against the bucket — anonymous listing requires
// an API key, so they could not be confirmed at build time. If a photo does not
// appear, list the bucket and correct `imageKey` here; nothing else needs to change.
//
// Matching prefers `achievementId` because two rows share the BuildFest name
// (a 1st Prize and a 3rd Prize entry); `competition` is the documented fallback.
export const hackathonFeatures = [
  {
    imageKey: 'hackathon_buildfest.jpg',
    achievementId: 'ii-2',
    competition: "BuildFest '26",
    accent: 'amber'
  },
  {
    imageKey: 'hackathon_sips.jpg',
    achievementId: 'iii-7',
    competition: 'Student Innovation & Product Summit (SIPS)',
    accent: 'cyan'
  },
  {
    imageKey: 'hackathon_mastra.jpg',
    achievementId: 'iii-6',
    competition: 'HiDevs × Mastra Hackathon',
    accent: 'emerald'
  },
  {
    imageKey: 'hackathon_moonshot.jpg',
    achievementId: 'ii-3',
    competition: 'Moonshot Hackathon 2026',
    accent: 'purple'
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
