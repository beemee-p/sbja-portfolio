export type PortfolioImage = Record<"title" | "img", string>;

export interface Portfolio {
  id: string;
  title: string;
  date: string;
  thumbnail?: string;
  skills?: string[];
  images?: PortfolioImage[];
  videos?: string[];
}
