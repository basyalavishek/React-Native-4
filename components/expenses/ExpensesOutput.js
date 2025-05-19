import { View, Text, StyleSheet } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { GlobalStyles } from "../../constants/styles";

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

const ExpensesOutput = ({ expenses, expensesPeriod }) => {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
};

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingTop:20, 
    backgroundColor: GlobalStyles.colors.primary700,
    flex: 1,
  },
});
