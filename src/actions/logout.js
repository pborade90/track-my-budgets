// rrd
import { redirect } from "react-router-dom"

// helper function
import { deleteItem } from "../helpers"

// toastify
import { toast } from "react-toastify"

export const logoutAction = async () => {
  deleteItem({ key: "userName" })
  deleteItem({ key: "budgets" })
  deleteItem({ key: "expenses" })

  toast.success("You have deleted your account")
  return redirect("/")
}