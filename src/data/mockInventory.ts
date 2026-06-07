export type InventorySignal = {
  productId: string;
  stockLevel: "high" | "normal" | "low";
  stockCount: number;
  pressure: number;
  strategy: "increase_discount_weight" | "normal_recommend" | "reduce_exposure";
};

export const mockInventory: InventorySignal[] = [
  {
    productId: "outerwear_utility_pocket_vest",
    stockLevel: "high",
    stockCount: 860,
    pressure: 0.9,
    strategy: "increase_discount_weight"
  },
  {
    productId: "outerwear_pink_varsity_jacket",
    stockLevel: "high",
    stockCount: 720,
    pressure: 0.82,
    strategy: "increase_discount_weight"
  },
  {
    productId: "bag_star_lock_satchel",
    stockLevel: "normal",
    stockCount: 320,
    pressure: 0.45,
    strategy: "normal_recommend"
  },
  {
    productId: "bottom_cream_cargo_pants",
    stockLevel: "normal",
    stockCount: 288,
    pressure: 0.42,
    strategy: "normal_recommend"
  },
  {
    productId: "glasses_star_party",
    stockLevel: "low",
    stockCount: 58,
    pressure: 0.15,
    strategy: "reduce_exposure"
  }
];
