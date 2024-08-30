// rrd
import { useLoaderData } from "react-router-dom"

// helper functions
import { deleteItem, fetchData } from "../helpers"

// components
import Table from "../components/Table"

// toastify
import { toast } from "react-toastify"

// loader
export const expensesLoader = () => {
  const expenses = fetchData("expenses")

  return { expenses }
}

// action
export const expenseAction = async ({ request }) => {
  const data = await request.formData()
  const { _action, ...values } = Object.fromEntries(data)

  // delete expense submission
  if (_action === "deleteExpense") {
    try {
      deleteItem({
        key: "expenses",
        id: values.expenseId,
      })
      return toast.success(`Expense Deleted!`)
    } catch (e) {
      throw new Error("There was a problem deleting your expense")
    }
  }
}

const ExpensesPage = () => {

  const { expenses } = useLoaderData()

  return (
    <div className="grid-lg">
      <h2>All Expenses</h2>
      {
        expenses && expenses.length > 0
          ? (
            <div className="grid-md">
              <h3>Recent Expenses <small>({expenses.length} total)</small></h3>
              <Table expenses={expenses} showBudget={true} />
            </div>
          )
          : <p>No Expenses to show</p>
      }
    </div>
  );
}

export default ExpensesPage;