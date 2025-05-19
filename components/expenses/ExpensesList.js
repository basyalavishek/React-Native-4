import {  FlatList } from 'react-native'
import ExpenseItem from './ExpenseItem'

function renderExpenseItem (itemData) {
    return (
    // <ExpenseItem description={itemData.item.description} date={itemData.item.date} amount={itemData.item.amount}/> 

    <ExpenseItem {...itemData.item}/> // passing all the properties in item as props in key value pair

    )
}

const ExpensesList = ({expenses}) => {
  return (
    <FlatList data={expenses} renderItem={renderExpenseItem} keyExtractor={(item)=>item.id}/>
  )
}

export default ExpensesList