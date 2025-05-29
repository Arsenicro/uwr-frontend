import { nanoid } from "nanoid";
import { calculate } from "./calculate";

export interface ShoppingItem {
  id: string;
  dateAdded: Date;
  name: string;
  price: number;
  quantity: number;
}

type ShoppingListAction =
  | {
      type: "REMOVE_ITEM";
      payload: string;
    }
  | {
      type: "ADD_ITEM";
      payload: Omit<ShoppingItem, "id" | "dateAdded">;
    }
  | {
      type: "UPDATE_QUANTITY";
      payload: {
        id: string;
        quantity: number;
      };
    };

export function calculateTotalPrice(
  items: ShoppingItem[],
  calculateFn = calculate
): number {
  return items.reduce(
    (total, item) => total + calculateFn(item.price, item.quantity),
    0
  );
}

export function shoppingListReducer(
  state: ShoppingItem[],
  action: ShoppingListAction
): ShoppingItem[] {
  switch (action.type) {
    case "REMOVE_ITEM":
      return state.filter((item) => item.id !== action.payload);
    case "ADD_ITEM":
      console.log(new Date());
      return [
        ...state,
        {
          ...action.payload,
          id: nanoid(),
          dateAdded: new Date(),
        },
      ];
    case "UPDATE_QUANTITY":
      return state.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: action.payload.quantity }
          : item
      );
    default:
      throw new Error("Unknown action type");
  }
}

export function formatShoppingItem(item: ShoppingItem): string {
  return `${item.name} - $${item.price.toFixed(2)} x ${item.quantity} = $${(
    item.price * item.quantity
  ).toFixed(2)}`;
}
