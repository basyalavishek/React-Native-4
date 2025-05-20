import { View, Text } from "react-native";
import ExpensesOutput from "../components/expenses/ExpensesOutput";
import { useContext } from "react";
import { ExpensesContext } from "../store/expenses-context";
import { getMinusDays } from "../util/date";

const RecentExpenses = () => {
  const expensesCtx = useContext(ExpensesContext);

  // to get the expenses from recent 7 days

  const recentExpenses = expensesCtx.expenses.filter((expense) => {
    const today = new Date();
    const date7daysAgo = getMinusDays(today, 7);
    return expense.date > date7daysAgo;
  });

  return (
    <ExpensesOutput expenses={recentExpenses} expensesPeriod="Last 7 days" />
  );
};

export default RecentExpenses;
