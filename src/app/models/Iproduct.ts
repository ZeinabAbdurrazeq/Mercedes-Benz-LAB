export interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
  category: {
    id: number;
    name: string;
    image: string;
  };
  // Keeping these for compatibility if needed, though they'll be empty/derived
  Quantity?: number; 
}

export interface ICategory {
  id: number;
  name: string;
  image?: string;
}
