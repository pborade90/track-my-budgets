// rrd
import { redirect } from "react-router-dom"

// toastify
import { toast } from "react-toastify"

// helper functions
import { deleteItem, getAllMatchingItems } from "../helpers"

export const deleteBudget = ({ params }) => {
  try {
    deleteItem({
      key: "budgets",
      id: params.id,
    })

    const associatedExpenses = getAllMatchingItems({
      category: "expenses",
      key: "budgetId",
      value: params.id
    })

    associatedExpenses.forEach(expense => {
      deleteItem({
        key: "expenses",
        id: expense.id
      })
    })

    toast.success("Budget deleted successfully")
  }
  catch (e) {
    throw new Error("There was a problem deleting your Budget")
  }

  return redirect("/")
}