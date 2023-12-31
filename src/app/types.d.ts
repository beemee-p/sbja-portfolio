export type PortfolioImage = Record<"title" | "img", string>;

export type Portfolio = {
  date: string;
  thumbnail?: string;
  portfolio?: string;

  // new
  id: string;
  title: string;
  summary?: string[];
  features?: string[];
  skills?: string[];
  images?: PortfolioImage[];
  videos?: string[];
};
