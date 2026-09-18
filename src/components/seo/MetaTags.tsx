import { useEffect } from 'react';

interface MetaTagsProps {
  title: string;
  description?: string;
}

export const MetaTags: React.FC<MetaTagsProps> = ({ title, description }) => {
  useEffect(() => {
    const fullTitle = title.includes('Steel & Stack')
      ? title
      : `${title} | Steel & Stack`;
    document.title = fullTitle;

    if (description) {
      let metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', description);
      }
      let ogDesc = document.querySelector('meta[property="og:description"]');
      if (ogDesc) {
        ogDesc.setAttribute('content', description);
      }
    }
  }, [title, description]);

  return null;
};
