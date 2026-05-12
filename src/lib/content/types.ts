import type { ServiceIconTone } from "@/components/ui/ServiceIcon/ServiceIcon";

/**
 * Domain types aligned with typical Headless CMS (WordPress / WPGraphQL) shapes
 * so the static provider can be swapped without changing consumers.
 */

export interface Service {
  id: string;
  slug: string;
  title: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
  icon: {
    tone: ServiceIconTone;
    label: string;
  };
  href: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  /** Free-form meta text such as "出力：20MW　所在地：北海道". */
  meta: string;
  image: {
    src: string;
    alt: string;
  };
}

export interface NewsItem {
  id: string;
  slug: string;
  title: string;
  /** ISO 8601 date string (YYYY-MM-DD). */
  publishedAt: string;
  category: string;
  href: string;
}

export interface FindParams {
  limit?: number;
}
