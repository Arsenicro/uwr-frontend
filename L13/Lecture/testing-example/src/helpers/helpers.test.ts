import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import {
  calculateTotalPrice,
  formatShoppingItem,
  shoppingListReducer,
  type ShoppingItem,
} from "./helpers";

vi.mock("nanoid", () => ({
  nanoid: () => "123",
}));

describe("calculateTotalPrice tests", () => {
  it("should return 0 for an empty list", () => {
    // Arrange
    const items: ShoppingItem[] = [];
    // Act
    const totalPrice = calculateTotalPrice(items);

    // Assert
    expect(totalPrice).toBe(0);
  });

  it("should calculate total price correctly for a single item", () => {
    // Arrange
    const items: ShoppingItem[] = [
      {
        id: "1",
        dateAdded: new Date(),
        name: "Test Item",
        price: 10,
        quantity: 2,
      },
    ];
    // Act
    const totalPrice = calculateTotalPrice(items);

    // Assert
    expect(totalPrice).toBe(20);
  });

  it("should calculate total price correctly for multiple items", () => {
    // Arrange
    const items: ShoppingItem[] = [
      {
        id: "1",
        dateAdded: new Date(),
        name: "Item 1",
        price: 10,
        quantity: 2,
      },
      {
        id: "2",
        dateAdded: new Date(),
        name: "Item 2",
        price: 5,
        quantity: 3,
      },
    ];

    // Act
    const totalPrice = calculateTotalPrice(items);

    // Assert
    expect(totalPrice).toBe(35);
  });

  it("should use the provided calculate function if given", () => {
    // Arrange
    const items: ShoppingItem[] = [
      {
        id: "1",
        dateAdded: new Date(),
        name: "Item 1",
        price: 10,
        quantity: 2,
      },
    ];
    const mockCalculate = vi.fn(
      (price: number, quantity: number) => price * quantity
    );

    // Act
    const totalPrice = calculateTotalPrice(items, mockCalculate);

    // Assert
    expect(totalPrice).toBe(20); // 10 * 2
    expect(mockCalculate).toHaveBeenCalledWith(10, 2);
    expect(mockCalculate).toHaveBeenCalledTimes(1);
  });
});

describe("shoppingListReducer tests", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("should handle REMOVE_ITEM action", () => {
    // Arrange
    const dateAdded = new Date();

    const initialState: ShoppingItem[] = [
      {
        id: "1",
        dateAdded,
        name: "Item 1",
        price: 10,
        quantity: 2,
      },
      {
        id: "2",
        dateAdded,
        name: "Item 2",
        price: 5,
        quantity: 3,
      },
    ];

    // Act
    const newState = shoppingListReducer(initialState, {
      type: "REMOVE_ITEM",
      payload: "1",
    });

    // Assert
    expect(newState).toEqual([
      {
        id: "2",
        name: "Item 2",
        dateAdded,
        price: 5,
        quantity: 3,
      },
    ]);
  });
  it("should handle ADD_ITEM action", () => {
    const date = new Date("2023-01-01T00:00:00Z");
    vi.setSystemTime(date);
    // Arrange
    const initialState: ShoppingItem[] = [];
    const newItem: Omit<ShoppingItem, "id" | "dateAdded"> = {
      name: "New Item",
      price: 15,
      quantity: 1,
    };

    // Act
    const newState = shoppingListReducer(initialState, {
      type: "ADD_ITEM",
      payload: newItem,
    });

    // Assert
    expect(newState).toHaveLength(1);
    expect(newState[0].name).toBe("New Item");
    expect(newState[0].price).toBe(15);
    expect(newState[0].quantity).toBe(1);
    expect(newState[0].id).toBe("123");
    expect(newState[0].dateAdded).toEqual(date);

    expect(newState).toEqual([
      expect.objectContaining({
        name: "New Item",
        id: expect.any(String),
        dateAdded: date,
        price: 15,
        quantity: 1,
      }),
    ]);
  });

  it("asdf", () => {
    // Arrange
    const initialState: ShoppingItem[] = [];
    const newItem: Omit<ShoppingItem, "id" | "dateAdded"> = {
      name: "New Item",
      price: 15,
      quantity: 1,
    };

    // Act
    const newState = shoppingListReducer(initialState, {
      type: "ADD_ITEM",
      payload: newItem,
    });

    // Assert
    expect(newState).toHaveLength(1);
    expect(newState[0].name).toBe("New Item");
    expect(newState[0].price).toBe(15);
    expect(newState[0].quantity).toBe(1);
    expect(newState[0].id).toBe("123");

    expect(newState).toEqual([
      expect.objectContaining({
        name: "New Item",
        id: expect.any(String),
        dateAdded: expect.any(Date),
        price: 15,
        quantity: 1,
      }),
    ]);
  });
});

describe("formatShoppingItem tests", () => {
  it("should format a shopping item correctly", () => {
    // Arrange
    const item: ShoppingItem = {
      id: "1",
      dateAdded: new Date("2023-01-01T00:00:00Z"),
      name: "Test Item",
      price: 10,
      quantity: 2,
    };

    // Act
    const formattedItem = formatShoppingItem(item);

    // Assert
    expect(formattedItem).toMatchSnapshot();
  });
});
