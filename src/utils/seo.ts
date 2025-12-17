interface SEOData {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
}

export function updatePageSEO(seoData: SEOData) {
  // Update page title
  document.title = seoData.title;

  // Update or create meta tags
  updateMetaTag('description', seoData.description);
  
  if (seoData.keywords) {
    updateMetaTag('keywords', seoData.keywords);
  }

  // Open Graph tags
  updateMetaTag('og:title', seoData.title, 'property');
  updateMetaTag('og:description', seoData.description, 'property');
  updateMetaTag('og:type', 'website', 'property');
  
  if (seoData.image) {
    updateMetaTag('og:image', seoData.image, 'property');
  }
  
  if (seoData.url) {
    updateMetaTag('og:url', seoData.url, 'property');
  }

  // Twitter Card tags
  updateMetaTag('twitter:card', 'summary_large_image');
  updateMetaTag('twitter:title', seoData.title);
  updateMetaTag('twitter:description', seoData.description);
  
  if (seoData.image) {
    updateMetaTag('twitter:image', seoData.image);
  }
}

function updateMetaTag(name: string, content: string, attribute: string = 'name') {
  let element = document.querySelector(`meta[${attribute}="${name}"]`);
  
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, name);
    document.head.appendChild(element);
  }
  
  element.setAttribute('content', content);
}

export const defaultSEO: SEOData = {
  title: 'PrimXP - Premium Event Management & Brand Experiences',
  description: 'Leading event management company specializing in corporate events, product launches, retail branding, and team meetings. Creating unforgettable experiences with professional execution.',
  keywords: 'event management, corporate events, product launch, retail branding, team meetings, event planning, brand experiences',
  image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg',
  url: 'https://www.primxp.com'
};