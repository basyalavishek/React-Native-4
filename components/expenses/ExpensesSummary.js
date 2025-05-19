import { View, Text,StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/styles";

const ExpensesSummary = ({expenses , periodName}) => {

const expensesSum = expenses.reduce((sum,expense)=>{
    return sum + expense.amount
}, 0);
// .reduce() is a powerful array method in JavaScript used to accumulate a single value (e.g., sum, average,
// array.reduce((accumulator, currentValue) => { ... }, initialValue); -> syntax
// accumulator (here called sum) = carries the running result (starts at initialValue, which is 0 here)
// currentValue (here called expense) = the current item in the array being processed
// initialValue = starting value of the accumulator (here it's 0)


  return (
    <View style={styles.container}>
      <Text style={styles.period}>{periodName}</Text>
      <Text style={styles.sum}>${expensesSum.toFixed(2)}</Text>
    </View>
  );
};

export default ExpensesSummary;

const styles = StyleSheet.create({
    container:{
        padding:8,
        backgroundColor:GlobalStyles.colors.primary50,
        borderRadius:6,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    period:{
        fontSize:14,
        color:GlobalStyles.colors.primary400,
    },
    sum:{
        fontSize:16,
        fontWeight:'bold',
        color:GlobalStyles.colors.primary500
    }
})
