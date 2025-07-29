// utils/image.ts
export const getImageUrl = (relativePath: string): string => {
  const HOST = 'http://145.223.33.2:5000'; // ou process.env.NEXT_PUBLIC_API_URL
  if (!relativePath) return '/placeholder.svg';
  if (relativePath.startsWith('http')) return relativePath;
  return `${HOST}${relativePath}`;
};