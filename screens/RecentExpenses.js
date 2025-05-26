import ExpensesOutput from "../components/expenses/ExpensesOutput";
import { useContext, useEffect, useState } from "react";
import { ExpensesContext } from "../store/expenses-context";
import { getMinusDays } from "../util/date";
import { fetchExpenses } from "../util/http";
import LoadingOverlay from "../components/UI/LoadingOverlay";
import ErrorOverlay from "../components/UI/ErrorOverlay";

const RecentExpenses = () => {

  const [isFetching , setIsFetching] = useState(true)
  const [error, setError] = useState()

  const expensesCtx = useContext(ExpensesContext);

  useEffect(() => {
    async function getExpenses() {
      setIsFetching(true)
      try{
        const expenses = await fetchExpenses();
        expensesCtx.setExpenses(expenses)
      }
      catch(error){
        setError('Could not fetch Expenses')
      }
      setIsFetching(false)
    }
    getExpenses();
  }, []);

  // to get the expenses from recent 7 days

  if(error && !isFetching){
    return <ErrorOverlay message={error}/>
  }

  if (isFetching){
    return<LoadingOverlay/>
  }

  const recentExpenses = expensesCtx.expenses.filter((expense) => {
    const today = new Date();
    const date7daysAgo = getMinusDays(today, 7);
    return expense.date > date7daysAgo && expense.date <= today;
  });

  return (
    <ExpensesOutput
      expenses={recentExpenses}
      expensesPeriod="Last 7 days"
      fallbackText="No expenses registered for the last 7 days"
    />
  );
};

export default RecentExpenses;
