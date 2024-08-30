// rrd
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"

// pages
import Dashboard, { dashboardAction, dashboardLoader } from "./pages/Dashboard"
import ExpensesPage, { expenseAction, expensesLoader } from "./pages/ExpensesPage"
import BudgetPage, { budgetAction, budgetLoader } from "./pages/BudgetPage"
import Error from "./pages/Error"
import NotFound from "./pages/NotFound"

// layouts
import RootLayout, { mainLoader } from "./layouts/RootLayout"

// actions
import { logoutAction } from "./actions/logout"
import { deleteBudget } from "./actions/deleteBudget"

// toastify
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<RootLayout />}
      loader={mainLoader}
      errorElement={<Error />}
    >
      <Route
        index
        element={<Dashboard />}
        loader={dashboardLoader}
        errorElement={<Error />}
        action={dashboardAction}
      />
      <Route
        path="budget/:id"
        element={<BudgetPage />}
        loader={budgetLoader}
        action={budgetAction}
      >
        <Route
          path="delete"
          action={deleteBudget}
        />
      </Route>
      <Route
        path="expenses"
        element={<ExpensesPage />}
        loader={expensesLoader}
        action={expenseAction}
      />
      <Route
        path="logout"
        action={logoutAction}
      />

      <Route path="*" element={<NotFound />} />
    </Route>
  )
)

function App() {

  return (
    <div className="App">
      <RouterProvider router={router} />
      <ToastContainer />
    </div>
  )
}

export default App
