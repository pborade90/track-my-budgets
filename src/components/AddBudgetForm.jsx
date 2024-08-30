// react 
import { useEffect, useRef } from "react";

// rrd
import { Form, useFetcher } from "react-router-dom";

// heroicon
import { CurrencyRupeeIcon } from "@heroicons/react/16/solid";

const AddBudgetForm = () => {

  const fetcher = useFetcher()
  const isSubmitting = fetcher.state === "submitting"

  const formRef = useRef()
  const focusRef = useRef()

  useEffect(() => {
    if (!isSubmitting) {
      formRef.current.reset()
      focusRef.current.focus()
    }
  }, [isSubmitting])

  return (
    <div className="form-wrapper">
      <h2 className="h3">Create Budget</h2>
      <fetcher.Form
        method="post"
        className="grid-sm"
        ref={formRef}
      >
        <div className="grid-xs">
          <label htmlFor="newBudget">Budget Name</label>
          <input
            type="text"
            name="newBudget"
            id="newBudget"
            placeholder="e.g., Groceries"
            required
            ref={focusRef}
          />
        </div>
        <div className="grid-xs">
          <label htmlFor="newBudgetAmount">Amount</label>
          <input
            type="number"
            step="1"
            name="newBudgetAmount"
            id="newBudgetAmount"
            placeholder="e.g., ₹2000"
            required
            inputMode="decimal"
          />
          <input type="hidden" name="_action" value="createBudget" />
        </div>
        <button type="submit" className="btn btn--dark">
          {
            isSubmitting ? <span>Creating Budget...</span> :
              <>
                <span>Create Budget</span>
                <CurrencyRupeeIcon width={20} />
              </>
          }
        </button>
      </fetcher.Form>
    </div>
  );
}

export default AddBudgetForm;