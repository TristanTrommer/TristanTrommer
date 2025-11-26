const normalizeSrc = (src: string) => {
  return src.startsWith('/') ? src.slice(1) : src;
};

export default function cloudflareLoader({
  src,
  width,
  quality
}: {
  src: string;
  width: number;
  quality?: number;
}) {
  if (process.env.NEXT_PUBLIC_ENVIRONMENT === 'preview') {
    return src;
  }

  const params = [`width=${width}`];
  if (quality) {
    params.push(`quality=${quality}`);
  }

  return `/cdn-cgi/image/${params.join(',')}/${normalizeSrc(src)}`;
}
