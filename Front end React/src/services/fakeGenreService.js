export const genres = [
  { _id: "5b21ca3eeb7f6fbccd471818", name: "iOS" },
  { _id: "5b21ca3eeb7f6fbccd471814", name: "Android" }
];

export function getGenres() {
  return genres.filter(g => g);
}

export function getPlatformId(platform) {
  return genres.find(m => m.name === platform);
}
