export interface User {
  id: number;
  name: string;
  email: string;
  role: "ADMIN" | "EDITOR" | "AUTHOR" | "READER";
  avatar?: string;
  bio?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface News {
  id: number;
  title: string;
  slug: string;
  excerpt?: string;
  content: string;
  image?: string;
  published: boolean;
  featured: boolean;
  views: number;
  publishedAt: Date;
  createdAt: Date;
  updatedAt: Date;
  authorId: number;
  categoryId: number;
  author: User;
  category: Category;
  tags: Tag[];
  comments: Comment[];
}

export interface Category {
  id: number;
  name: string;
  slug: string;
  description?: string;
  color: string;
  news?: News[];
}

export interface Tag {
  id: number;
  name: string;
  slug: string;
  news?: News[];
}

export interface Comment {
  id: number;
  content: string;
  createdAt: Date;
  updatedAt: Date;
  authorId: number;
  newsId: number;
  author: User;
  news: News;
}

export interface NewsCardProps {
  news: News;
  variant?: "default" | "featured" | "compact";
}

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export interface SearchParams {
  query?: string;
  category?: string;
  tag?: string;
  page?: number;
  limit?: number;
}

export interface ApiResponse<T> {
  data: T;
  message?: string;
  success: boolean;
}

export interface NewsListResponse {
  news: News[];
  totalCount: number;
  currentPage: number;
  totalPages: number;
}
