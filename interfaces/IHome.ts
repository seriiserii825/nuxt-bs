import type {IPortfolioItem} from "./IPortfolioResponse";

export interface IHomeResponse {
    posts: IPost[];
    portfolios: IPortfolioItem[];
}

export interface IPost {
    id:               number;
    title:            string;
    slug:             string;
    text:             string;
    status:           string;
    post_category_id: number;
    category:         ICategory;
    created_at:       Date;
    updated_at:       Date;
}

export interface ICategory {
    id:         number;
    title:      string;
    status:     string;
    image:      string;
    created_at: Date;
    updated_at: Date;
}
