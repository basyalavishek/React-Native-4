import { useContext, useLayoutEffect } from "react";
import { View, StyleSheet } from "react-native";
import IconButton from "../components/UI/IconButton";
import { GlobalStyles } from "../constants/styles";
import { ExpensesContext } from "../store/expenses-context";
import ExpenseForm from "../components/ManageExpense/ExpenseForm";

const ManageExpenses = ({ route, navigation }) => {
  const expenseCtx = useContext(ExpensesContext);

  const editedExpenseId = route.params?.expenseId; // Get expenseId from route.params, but only if route.params exists
  //route is an object automatically provided to every screen component by React Navigation.
  //route.params holds the data that was passed to that screen.
  // The optional chaining (?.) prevents the app from crashing if params is undefined
  // You can now use editedExpenseId to determine if you're editing an existing expense
  // or creating a new one.If you are editing existing expense the title will be different and if you are creating new expense the title will be different for same screen

  const isEditing = !!editedExpenseId; // converting value into boolean

  const selectedExpense = expenseCtx.expenses.find((expense)=>expense.id === editedExpenseId )

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEditing]);

  function deleteExpenseHandler() {
    expenseCtx.deleteExpense(editedExpenseId);
    // This triggers the deleteExpenses function inside the provider

    navigation.goBack(); // go back to prevous screen from which the screen is opened , works as back button
  }

  function cancelHandler() {
    navigation.goBack();
  }

  function confirmHandler(expenseData) {
    if (isEditing) {
      expenseCtx.updateExpense(editedExpenseId, expenseData);
    } else {
      expenseCtx.addExpense(expenseData);
    }

    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <ExpenseForm onSubmit={confirmHandler} submitButtonLabel={isEditing ? 'Update' : 'Add'} onCancel={cancelHandler} defaultValues = {selectedExpense}/>
      
      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            icon="trash"
            color={GlobalStyles.colors.error500}
            size={36}
            onPress={deleteExpenseHandler}
          />
        </View>
      )}
    </View>
  );
};

export default ManageExpenses;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800,
  },

  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: "center",
  },
});
