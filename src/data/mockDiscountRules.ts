export const mockDiscountRules = [
  {
    id: "high_stock_coupon",
    condition: "high_inventory_pressure",
    couponName: "库存优化搭子券",
    discount: 50,
    threshold: 199
  },
  {
    id: "weather_coupon",
    condition: "weather_matched",
    couponName: "天气灵感搭子券",
    discount: 30,
    threshold: 169
  },
  {
    id: "node_coupon",
    condition: "calendar_node_matched",
    couponName: "节点专属搭子券",
    discount: 40,
    threshold: 199
  }
];
