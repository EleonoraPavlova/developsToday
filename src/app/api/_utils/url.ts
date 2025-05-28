const BASE_URL = 'https://api.spoonacular.com/'

export function buildUrl(path: string, params: Record<string, any>): string {
  const url = new URL(path, BASE_URL)
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      url.searchParams.append(key, String(value))
    }
  })
  return url.toString()
}
