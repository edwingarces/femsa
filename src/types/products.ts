export interface ItemType {
  createdAt: string;
  product: string;
  price: string;
  image: string;
  is_redemption: boolean;
  id: string;
}

export interface RenderItemProps {
  item: ItemType;
}

export interface ItemProps {
  item: ItemType;
  onPress: () => void;
}

export interface ProductsListProps {
  data: ItemType[];
  onPress: (item: ItemType) => void;
}
