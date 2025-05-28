export async function fetchWithCache<T>(url: string): Promise<T> {
  const res = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': process.env.SPOON_API_KEY ?? '',
    },
    next: { revalidate: 60 },
  })

  if (!res.ok) {
    throw new Error(`Fetch failed for ${url} with status ${res.status}`)
  }

  return res.json()
}
