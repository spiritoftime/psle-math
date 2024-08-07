export function buildSupabaseFilter(filterBy: string[]) {
  return `(${filterBy.map((value) => `"${value}"`).join(",")})`;
}
export const useBaseFetch = async (path: string, options = {}) => {
  const url =
    process.env.NODE_ENV === "development"
      ? process.env.NEXT_PUBLIC_LOCAL_URL
      : process.env.NEXT_PUBLIC_PROD_URL;
  const res = await fetch(`${url}/api/${path}`, options);
  const { data, error } = await res.json();
  return { ...data, error };
};
