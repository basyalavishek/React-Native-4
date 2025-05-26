import axios from "axios";

const FIREBASE_URL =
  "https://react-native---expense-tracker-default-rtdb.asia-southeast1.firebasedatabase.app";
// The .json is required by Firebase when you're using the REST API and 'expenses' is the path

export async function storeExpense(expenseData) {
  const response = await axios.post(
    FIREBASE_URL + "/expenses.json",
    expenseData
  );
  // expenseData is the data we want to post to this url

  const id = response.data.name; // in firebase the id is accessed as 'name'
  return id;
}

export async function fetchExpenses() {
  const response = await axios.get(FIREBASE_URL + "/expenses.json");
  const expenses = [];

  for (const key in response.data) {
    const expenseObj = {
      id: key,
      amount: response.data[key].amount,
      description: response.data[key].description,
      date: new Date(response.data[key].date),
    };
    expenses.push(expenseObj);
  }
  return expenses;
  // The purpose of return expenses; is to send the list of expenses back to the place where the fetchExpenses function was called.
}

export function updateExpense(id, expenseData) {
  return axios.put(FIREBASE_URL + `/expenses/${id}.json`, expenseData);
}

export function deleteExpense(id) {
  return axios.delete(FIREBASE_URL + `/expenses/${id}.json`);
}
