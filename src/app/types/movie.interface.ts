export interface MovieApiResponse {
  apiVersion: string;
  data: {
    category: Category;
  };
}

export interface Category {
  id: number;
  name: string;
  description: string;
  domain: string;
  analyticsId: string;
  gemiusId: string;
  siteContent: string;
  frontPage: FrontPageSection[];
}

export interface FrontPageSection {
  header: string;
  headerUrl: string;
  highTimeline: boolean;
  liveBlock: boolean;
  manual: {
    highTimeline: boolean;
    banner: boolean;
  };
  data: ContentItem[];
}

export interface ContentItem {
  id: number;
  heading: string;
  lead?: string;
  primaryCategoryId: number;
  type: 'movie' | 'series' | 'episode';
  parentContentPath: string;
  scheduleStart: number;
  subHeading: string;
  hasActiveMedia: boolean;
  rootContentId: number;
  rootCategoryId: number;
  canonicalUrl: string;
  fancyUrl: string;
  anotherDomainContent: boolean;
  photos: Photo[];
  verticalPhotos: Photo[];
  squarePhotos: Photo[];
  mediaType?: string;
}

export interface Photo {
  id: number;
  ord: number;
  type: number;
  created: number;
  version: number;
  format: string;
  captionEt: string;
  captionEn: string;
  captionRu: string;
  authorEt: string;
  authorEn: string;
  authorRu: string;
  photoTypes: Record<string, PhotoType>;
  photoUrlOriginal: string;
  photoUrlBase: string;
}

export interface PhotoType {
  type: number;
  w: number;
  h: number;
  url: string;
}
