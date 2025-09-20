export type InternalLink = {
  name: string;
  section: string;
};

export type ExternalLink = {
  name: string;
  href: string;
  target: string;
};

export type NavigationItem = InternalLink | ExternalLink;
