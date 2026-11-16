import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export interface MetaTagsProps {
  title: string;
  description?: string;
  canonicalPath?: string;
  noindex?: boolean;
  ogImage?: string;
  ogType?: 'website' | 'article';
  schema?: Record<string, unknown>;
}

const BASE_URL = 'https://steelandstack.com';
const DEFAULT_OG_IMAGE = `${BASE_URL}/og-image.png`;

export const MetaTags: React.FC<MetaTagsProps> = ({
  title,
  description,
  canonicalPath,
  noindex = false,
  ogImage = DEFAULT_OG_IMAGE,
  ogType = 'website',
  schema,
}) => {
  const location = useLocation();

  useEffect(() => {
    // 1. Document Title
    const fullTitle = title.includes('Steel & Stack')
      ? title
      : `${title} | Steel & Stack`;
    document.title = fullTitle;

    // Helper to safely set/update or create meta elements
    const setMetaTag = (attr: 'name' | 'property', key: string, content: string) => {
      let meta = document.querySelector(`meta[${attr}="${key}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attr, key);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    // Helper for link tags (e.g. canonical)
    const setLinkTag = (rel: string, href: string) => {
      let link = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', rel);
        document.head.appendChild(link);
      }
      link.setAttribute('href', href);
    };

    // 2. Title meta tags
    setMetaTag('name', 'title', fullTitle);
    setMetaTag('property', 'og:title', fullTitle);
    setMetaTag('name', 'twitter:title', fullTitle);

    // 3. Description meta tags
    if (description) {
      setMetaTag('name', 'description', description);
      setMetaTag('property', 'og:description', description);
      setMetaTag('name', 'twitter:description', description);
    }

    // 4. Canonical URL
    const targetPath = canonicalPath !== undefined ? canonicalPath : location.pathname;
    const cleanPath = targetPath === '/' ? '' : targetPath.replace(/\/+$/, '');
    const canonicalUrl = `${BASE_URL}${cleanPath || '/'}`;
    setLinkTag('canonical', canonicalUrl);
    setMetaTag('property', 'og:url', canonicalUrl);
    setMetaTag('name', 'twitter:url', canonicalUrl);

    // 5. Open Graph & Twitter Cards
    setMetaTag('property', 'og:type', ogType);
    setMetaTag('property', 'og:image', ogImage);
    setMetaTag('property', 'og:image:secure_url', ogImage);
    setMetaTag('property', 'og:image:width', '1200');
    setMetaTag('property', 'og:image:height', '630');
    setMetaTag('property', 'og:image:alt', fullTitle);
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:image', ogImage);
    setMetaTag('name', 'twitter:image:alt', fullTitle);

    // 6. Robots Tag - Ensure deliberate index or noindex
    const robotsContent = noindex
      ? 'noindex, nofollow'
      : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1';
    setMetaTag('name', 'robots', robotsContent);
    setMetaTag('name', 'googlebot', robotsContent);

    // 7. Inject Schema JSON-LD if provided
    let scriptTag: HTMLScriptElement | null = null;
    if (schema) {
      scriptTag = document.createElement('script');
      scriptTag.type = 'application/ld+json';
      scriptTag.text = JSON.stringify(schema);
      scriptTag.setAttribute('data-dynamic-schema', 'true');
      document.head.appendChild(scriptTag);
    }

    return () => {
      if (scriptTag && document.head.contains(scriptTag)) {
        document.head.removeChild(scriptTag);
      }
    };
  }, [title, description, canonicalPath, noindex, ogImage, ogType, schema, location.pathname]);

  return null;
};
