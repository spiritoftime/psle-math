export function buildSupabaseFilter(filterBy: string[]) {
  return `(${filterBy.map((value) => `"${value}"`).join(",")})`;
}
