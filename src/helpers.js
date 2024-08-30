
// Fake delay to simulate database loading
export const waait = () => new Promise(res => setTimeout(res, Math.random() * 1000))

// generate random color
const generateRandomColor = () => {
  const existingBudgetLength = fetchData("budgets")?.length ?? 0
  /*The ?. is the optional chaining operator, which ensures that if fetchData("budgets") returns null or undefined,
  the code won't throw an error when accessing .length. Instead, existingBudgetLength will be assigned undefined. */
  return `${existingBudgetLength * 34} 65% 50%`
}

// Local storage functions
export const fetchData = key => {
  return JSON.parse(localStorage.getItem(key))
}

// get all items from local storage
export const getAllMatchingItems = ({ category, key, value }) => {
  const data = fetchData(category) ?? []
  return data.filter(item => item[key] === value)
}

// create budget
export const createBudget = ({ name, amount }) => {
  const newItem = {
    id: crypto.randomUUID(),
    name: name,
    createdAt: Date.now(),
    amount: +amount,
    color: generateRandomColor()
  }
  const existingBudgets = fetchData("budgets") ?? []
  return localStorage.setItem("budgets", JSON.stringify([...existingBudgets, newItem]))
}

// create expense
export const createExpense = ({ name, amount, budgetId }) => {
  const newItem = {
    id: crypto.randomUUID(),
    name: name,
    createdAt: Date.now(),
    amount: +amount,
    budgetId: budgetId
  }
  const existingExpenses = fetchData("expenses") ?? []
  return localStorage.setItem("expenses", JSON.stringify([...existingExpenses, newItem]))
}

// delete item
export const deleteItem = ({ key, id }) => {
  const existingData = fetchData(key)
  if (id) {
    const newData = existingData.filter(item => item.id !== id)
    return localStorage.setItem(key, JSON.stringify(newData))
  }
  return localStorage.removeItem(key)
}

//total spent by budget
export const calculateSpentByBudget = budgetId => {
  const expenses = fetchData("expenses") ?? []
  const budgetSpent = expenses.reduce((acc, expense) => {
    if (expense.budgetId !== budgetId) return acc

    return acc += expense.amount
  }, 0)
  return budgetSpent
}

// formatting

//fomatting percentage
export const formatPercentage = amt => {
  return amt.toLocaleString(undefined, {
    style: "percent",
    minimumFractionDigits: 0
  })
}

// format currency 
export const formatCurrency = amt => {
  return amt.toLocaleString(undefined, {
    style: "currency",
    currency: "INR"
  })
}

// formatting dates
export const formatDateToLocaleString = epoch => {
  return new Date(epoch).toLocaleDateString()
}