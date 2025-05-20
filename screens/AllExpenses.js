import { View, Text } from "react-native";
import ExpensesOutput from "../components/expenses/ExpensesOutput";
import { useContext } from "react";
import { ExpensesContext } from "../store/expenses-context";

const AllExpenses = () => {
  const expensesCtx = useContext(ExpensesContext) // to pass the dummy variables from our expenses-context.js to ExpenseOutput component
  return <ExpensesOutput expenses={expensesCtx.expenses} expensesPeriod="Total"  fallbackText="No registered expenses found!!"/>;
};

export default AllExpenses;
