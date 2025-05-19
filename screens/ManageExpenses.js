import { View, Text } from 'react-native'

const ManageExpenses = ({route}) => {
const editedExpenseId = route.params?.expenseId // Get expenseId from route.params, but only if route.params exists
//route is an object automatically provided to every screen component by React Navigation.
//route.params holds the data that was passed to that screen.
  return (
    <View>
      <Text>ManageExpenses</Text>
    </View>
  )
}

export default ManageExpenses