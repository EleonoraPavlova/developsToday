export function getFirstString(param: string | string[] | undefined): string | undefined {
  if (Array.isArray(param)) return param[0]
  return param
}
