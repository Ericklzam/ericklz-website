export interface Post {
  id: number;
  title: string;
  subtitle: string;
  category: string;
  date: string;
  read: string;
  introduction: string;
  titles: string[];
  paragraphs: string[];
  images: string[];
  description?: string;
  image?: string;
  tag?: string;
  time?: string;
  active?: boolean;
}
