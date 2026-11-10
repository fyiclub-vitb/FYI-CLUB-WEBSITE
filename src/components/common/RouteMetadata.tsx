import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SITE_URL = 'https://fyiclubvitbpl.web.app';
const DEFAULT_TITLE = 'FYI Club VIT Bhopal | Fraternity of Young Innovators';
const DEFAULT_DESCRIPTION = 'Discover FYI Club at VIT Bhopal, the Fraternity of Young Innovators. Explore student projects, events, technology, and hands-on innovation.';

const PAGE_METADATA: Record<string, { title: string; description: string }> = {
  '/': { title: DEFAULT_TITLE, description: DEFAULT_DESCRIPTION },
  '/about': { title: 'About FYI Club | VIT Bhopal', description: 'Learn about FYI Club, the Fraternity of Young Innovators at VIT Bhopal, and our student-led approach to technology and innovation.' },
  '/projects': { title: 'Student Projects | FYI Club VIT Bhopal', description: 'Explore software, hardware, and creative technology projects built by students in FYI Club at VIT Bhopal.' },
  '/events': { title: 'Events and Workshops | FYI Club VIT Bhopal', description: 'Find workshops, meetups, and upcoming events hosted by FYI Club at VIT Bhopal.' },
  '/team': { title: 'Our Team | FYI Club VIT Bhopal', description: 'Meet the student team behind FYI Club, the Fraternity of Young Innovators at VIT Bhopal.' },
  '/gallery': { title: 'Gallery | FYI Club VIT Bhopal', description: 'See moments from FYI Club projects, workshops, events, and campus activities at VIT Bhopal.' },
  '/join': { title: 'Join FYI Club | VIT Bhopal', description: 'Join the Fraternity of Young Innovators at VIT Bhopal and build practical software and hardware projects with students.' },
};

function setMeta(name: string, content: string, property = false) {
  const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
  let element = document.head.querySelector<HTMLMetaElement>(selector);
  if (!element) {
    element = document.createElement('meta');
    if (property) element.setAttribute('property', name);
    else element.name = name;
    document.head.appendChild(element);
  }
  element.content = content;
}

export function RouteMetadata() {
  const { pathname } = useLocation();

  useEffect(() => {
    const page = PAGE_METADATA[pathname] ?? {
      title: 'Page Not Found | FYI Club VIT Bhopal',
      description: 'The requested page could not be found on the FYI Club VIT Bhopal website.',
    };
    const canonicalUrl = `${SITE_URL}${pathname === '/' ? '/' : pathname}`;

    document.title = page.title;
    setMeta('description', page.description);
    setMeta('og:title', page.title, true);
    setMeta('og:description', page.description, true);
    setMeta('og:url', canonicalUrl, true);
    setMeta('twitter:title', page.title);
    setMeta('twitter:description', page.description);

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;

    if (!PAGE_METADATA[pathname]) setMeta('robots', 'noindex, follow');
    else setMeta('robots', 'index, follow, max-image-preview:large');
  }, [pathname]);

  return null;
}
