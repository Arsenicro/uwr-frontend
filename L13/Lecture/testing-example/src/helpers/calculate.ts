export function calculate(price: number, quantity: number): number {
  if (quantity <= 0) {
    throw new Error("Quantity must be greater than zero");
  }
  return price * quantity;
}
