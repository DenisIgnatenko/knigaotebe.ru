export interface BookFormat {
  id: string;
  title: string;
  shortDescription: string;
  details: {
    description: string;
    cover: {
      type: string;
      material: string;
      print: string;
      binding: string;
    };
    pages: {
      material: string;
      print: string;
    };
  };
  size: string;
  price: number;
  image: string;
  isBestSeller?: boolean;
}

export interface BookConfigState {
  formats: BookFormat[];
  selectedFormatId: string | null;
  modalFormatId: string | null;
}
