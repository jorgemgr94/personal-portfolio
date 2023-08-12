export interface INavigationItem {
  name: string | React.ReactNode;
  href: string;
  current: boolean;
  target: string;
}
