export function removeDuplicatesByKey<T extends Record<string, any>>(array: T[], key: keyof T = 'id'): T[] {
  const seen = new Set()
  return array.filter((item) => {
    const value = item[key]
    if (seen.has(value)) return false
    seen.add(value)
    return true
  })
}
