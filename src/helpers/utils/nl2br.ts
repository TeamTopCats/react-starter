export const nl2br = (str: string): string =>
  str && str.replace(/([^>])\n/g, '$1<br/>')
