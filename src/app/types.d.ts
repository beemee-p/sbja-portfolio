export type Post = {
  date: string;
  thumbnail?: string;
  portfolio?: string;

  // new
  id: string;
  title: string;
  summary?: string[];
  features?: string[];
  skills?: string[];
  images?: string[];
  videos?: string[];
};
