export type BarMenuConfig = {
  enabled: boolean;
  showInFooter: boolean;

  location: string;
  endTime: string;

  menu: {
    category: string;
    items: {
      name: string;
      subtitle: string | null;
      unit_price: string;
      unit_quantity: string | null;
      line_1: string | null;
      line_2: string | null;
    }[];
  }[];
};
