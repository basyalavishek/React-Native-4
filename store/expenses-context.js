import { createContext, useReducer } from "react";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "A pair of Shoe",
    amount: 20.5,
    date: new Date("2025-01-16"),
  },
  {
    id: "e2",
    description: "Book",
    amount: 12.5,
    date: new Date("2025-02-16"),
  },
  {
    id: "e3",
    description: "A laptop",
    amount: 2000,
    date: new Date("2024-03-16"),
  },
  {
    id: "e4",
    description: "A Keyboard",
    amount: 35.78,
    date: new Date("2025-04-16"),
  },
  {
    id: "e5",
    description: "Mobile Phone",
    amount: 700.99,
    date: new Date("2022-03-26"),
  },
  {
    id: "e6",
    description: "A pair of Shoe",
    amount: 20.5,
    date: new Date("2025-01-16"),
  },
  {
    id: "e7",
    description: "Book",
    amount: 12.5,
    date: new Date("2025-02-16"),
  },
  {
    id: "e8",
    description: "A laptop",
    amount: 2000,
    date: new Date("2024-03-16"),
  },
  {
    id: "e9",
    description: "A Keyboard",
    amount: 35.78,
    date: new Date("2025-04-16"),
  },
  {
    id: "e10",
    description: "Mobile Phone",
    amount: 700.99,
    date: new Date("2022-03-26"),
  },
];

export const ExpensesContext = createContext({
  expenses: [], //An array that will hold the list of expenses.
  addExpenses: ({ description, amount, date }) => {},
  updateExpenses: (id) => {},
  deleteExpenses: (id, { description, amount, date }) => {},
});

// // Reducer function: handles different actions (add, update, delete)
// These two parameters:(state and action) are standard in reducer functions, especially when using them with useReducer() in React.
// state:This is the current data or value that we are working with. For example, the current list of expenses.
// action:This is an instruction or command that tells us what to do with the state — like "add an item", "delete an item", or "update something"
function expensesReducer(state, action) {
  switch (
    action.type //The switch(action.type) looks at the type of the action and performs different logic based on it.
  ) {
    case "ADD":
      const id = new Date().toString() + Math.random().toString();
      return [{ ...action.payload, id: id }, ...state];

    case "UPDATE":
      const updatableExpenseIndex = state.findIndex(
        //All the expenses are stored in the state This state is passed into the reducer function automatically by React's useReducer() hook.
        (expense) => expense.id === action.payload.id
      );

      const updatableExpense = state[updatableExpenseIndex]; // Now that we have the index, we grab the actual expense object from the array using that index.

      const updatedItem = { ...updatableExpense, ...action.payload.daat }; // Copy everything from the old expense (updatableExpense) Overwrite it with the new values from action.payload.data (like new amount, new date, etc.)

      const updatedExpenses = [...state]; // “Make a copy of the current list of expenses. (contains original expenses)”

      updatedExpenses[updatableExpenseIndex] = updatedItem; // We replace the old item at that index with the new updated item.

      return updatedExpenses; // When you return updatedExpenses; from the reducer, React replaces the old state with this new updated array.So, after the reducer finishes, state becomes the updatedExpenses you returned — which means the state now holds the updated data.


    case "DELETE":
      return state.filter((expense) => expense.id !== action.palyoad);
    default:
      return state;
  }
}

// Actual provider function which hold the actual logic
function ExpensesContextProvider({ children }) {
  const [expenseState, dispatch] = useReducer(expensesReducer , DUMMY_EXPENSES);  // Initially, expenseState contains the DUMMY_EXPENSES.
  // expenseState is the current state (the current list of expenses).
 // 'state' in expenseReducer function is expenseState

  function addExpenses(expenseData) {
    dispatch({ type: "ADD", palyoad: expenseData }); // expenseData is a single variable (usually an object) that combines the description, amount, and date 

    // dispatch is a function you get when you use React's useReducer hook.Its job is to send ("dispatch") an action to the reducer function.The reducer then decides how to update the state based on that action.
  }

  function deleteExpenses(id) {
    dispatch({ type: "DELETE", payload: id });
  }

  function updateExpenses(id, expenseData) {
    dispatch({ type: "UPDATTE", payload: { id: id, data: expenseData } });
  }

  const value = {
    expenses : expenseState,
    addExpense : addExpenses,
    deleteExpense : deleteExpenses,
    updateExpense: updateExpenses,
  }
// to use all the functions and data in all the components
  return <ExpensesContext.Provider value={value}>{children}</ExpensesContext.Provider>;
}

export default ExpensesContextProvider;
