import { useEffect } from 'react';

const SITE = 'Whites & Brights';

/**
 * Sets the document title and meta description while a page is mounted,
 * restoring the previous values on unmount.
 * Pass a full title to override the "<title> | Whites & Brights" format.
 */
export default function usePageMeta(title, description, { full = false } = {}) {
  useEffect(() => {
    const prevTitle = document.title;
    let meta = document.querySelector('meta[name="description"]');
    const created = !meta;
    if (created) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
      document.head.appendChild(meta);
    }
    const prevDescription = meta.getAttribute('content');

    document.title = full || !title ? title || prevTitle : `${title} | ${SITE}`;
    if (description) meta.setAttribute('content', description);

    return () => {
      document.title = prevTitle;
      if (created) meta.remove();
      else meta.setAttribute('content', prevDescription);
    };
  }, [title, description, full]);
}
