import {
  createContext,
  useReducer,
  useEffect,
  Dispatch,
  ReactNode,
} from "react";
import { CoffeeProps } from "../types";

type StateType = {
  selectedCoffees: CoffeeProps[];
  totalAmount: number;
};

type ActionType =
  | { type: "ADD_COFFEE"; payload: CoffeeProps }
  | { type: "REMOVE_COFFEE"; payload: number }
  | {
      type: "UPDATE_COFFEE_QUANTITY";
      payload: { id: number; quantity: number };
    }
  | { type: "CLEAR_COFFEES" };

// Initial state with both selected coffees and total amount
const initialState: StateType = {
  selectedCoffees: [],
  totalAmount: 0,
};

// Helper function to calculate total amount
const calculateTotalAmount = (coffees: CoffeeProps[]) => {
  return coffees.reduce(
    (total, coffee) => total + coffee.price * coffee.quantity!,
    0
  );
};

// Coffee reducer
function coffeeReducer(state: StateType, action: ActionType): StateType {
  let updatedCoffees;

  switch (action.type) {
    case "ADD_COFFEE":
      updatedCoffees = [...state.selectedCoffees, action.payload];
      return {
        selectedCoffees: updatedCoffees,
        totalAmount: calculateTotalAmount(updatedCoffees),
      };

    case "REMOVE_COFFEE":
      updatedCoffees = state.selectedCoffees.filter(
        (coffee) => coffee.id !== action.payload
      );
      return {
        selectedCoffees: updatedCoffees,
        totalAmount: calculateTotalAmount(updatedCoffees),
      };

    case "UPDATE_COFFEE_QUANTITY":
      updatedCoffees = state.selectedCoffees.map((coffee) =>
        coffee.id === action.payload.id
          ? { ...coffee, quantity: action.payload.quantity }
          : coffee
      );
      return {
        selectedCoffees: updatedCoffees,
        totalAmount: calculateTotalAmount(updatedCoffees),
      };

    case "CLEAR_COFFEES":
      return {
        selectedCoffees: [],
        totalAmount: 0,
      };

    default:
      return state;
  }
}

// Create the CoffeeContext
const CoffeeContext = createContext<{
  state: StateType;
  dispatch: Dispatch<ActionType>;
}>({
  state: initialState,
  dispatch: () => undefined,
});

// Coffee Provider
export const CoffeeProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(coffeeReducer, initialState, () => {
    const localData = localStorage.getItem("coffeeState");
    return localData ? JSON.parse(localData) : initialState;
  });

  // Save selected coffees and totalAmount to localStorage
  useEffect(() => {
    localStorage.setItem("coffeeState", JSON.stringify(state));
  }, [state]);

  return (
    <CoffeeContext.Provider value={{ state, dispatch }}>
      {children}
    </CoffeeContext.Provider>
  );
};

export default CoffeeContext;
