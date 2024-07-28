export function buildSupabaseFilter(filterBy: string[]) {
  console.log(filterBy, "filterBy");
  return `(${filterBy.map((value) => `"${value}"`).join(",")})`;
}
