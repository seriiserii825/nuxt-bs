export interface IPortfolioResponse {
  total: number;
  data: IPortfolioItem[];
  taxonomies: ITaxonomy[];
}
export interface IPortfolioFilter {
  total: number;
  data: IPortfolioItem[];
  limit: number;
  offset: number;
}
export interface ITaxonomy {
  id: number;
  title: string;
  created_at: string;
  updated_at: string;
}

export interface IPortfolioItem {
  id: number;
  title: string;
  slug: string;
  image: string;
  url: string;
  taxonomy_id: number;
  taxonomy: ITaxonomy;
  created_at: string;
  updated_at: string;
}

