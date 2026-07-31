export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ');
}

export async function copyToClipboard(text: string) {
  await navigator.clipboard.writeText(text);
}
