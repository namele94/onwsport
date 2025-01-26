export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
}

export interface Event {
  id: number;
  menu: string;
  title: string;
  description: string;
  date: string;
  imageUrl: string;
}

export interface Filter {
  id: number;
  name: string;
  imgUrl: any;
}

export interface Match {
  league: string;
  date: string;
  time: string;
  team1: string;
  team2: string;
}
