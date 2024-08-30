// rrd
import { useLoaderData } from "react-router-dom";

// helper functions
import { createExpense, deleteItem, getAllMatchingItems } from "../helpers";

// components
import BudgetItem from "../components/BudgetItem";
import AddExpenseForm from "../components/AddExpenseForm";
import Table from "../components/Table";

// toastify
import { toast } from "react-toastify";

// loader
export const budgetLoader = async ({ params }) => {
  const budget = await getAllMatchingItems({
    category: "budgets",
    key: "id",
    value: params.id,
  })[0]

  const expenses = await getAllMatchingItems({
    category: "expenses",
    key: "budgetId",
    value: params.id,
  })

  if (!budget) {
    throw new Error("The budget you are trying to find does not exist")
  }

  return { budget, expenses }
}

// action
export const budgetAction = async ({ request }) => {
  const data = await request.formData()
  const { _action, ...values } = Object.fromEntries(data)

  // new expense submission
  if (_action === "createExpense") {
    try {
      createExpense({
        name: values.newExpense,
        amount: values.newExpenseAmount,
        budgetId: values.newExpenseBudget
      })
      return toast.success(`Expense ${values.newExpense} Added!`)
    } catch (e) {
      throw new Error("There was a problem adding your expense")
    }
  }

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

const BudgetPage = () => {

  const { budget, expenses } = useLoaderData()

  return (
    <div
      className="grid-lg"
      style={{
        "--accent": budget.color
      }}
    >
      <h2 className="h3">
        <span className="accent">{budget.name} </span>
        Overview
      </h2>
      <div className="flex-lg">
        <BudgetItem budget={budget} showDelete={true} />
        <AddExpenseForm budgets={[budget]} showBudget={false} />
      </div>
      {
        expenses && expenses.length > 0 && (
          <div className="grid-md">
            <h3>
              <span className="accent">{budget.name} </span>
              Expenses
            </h3>
            <Table expenses={expenses} />
          </div>
        )
      }
    </div>
  );
}

export default BudgetPage;