const ON_ORDER_PRODUCT_CHANGED = userId => {
  return `
subscription {
  onProductOrderChanged {
    text,
    orderId,
    productOrderId,
    productStatus,
  }
}
`;
};
export { ON_ORDER_PRODUCT_CHANGED };
