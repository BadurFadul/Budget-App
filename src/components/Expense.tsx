import { useState } from "react"
import { useInput } from "../hooks"

interface Expenstype {
    expense: string
    amount: number
    date: Date
}

interface ExpencesProps {
    Expenses: (amount: number) => void
}

const Expense = ({Expenses}: ExpencesProps ) => {
    const expenseInput = useInput()
    const amountInput = useInput()
    const dateInput = useInput()
    const [expenses, setExpenses] = useState<Expenstype[]>([])
    
    const print = (e: React.FormEvent) => {
        e.preventDefault()
        const amount = Number(amountInput.value)
        const expenseItems: Expenstype = {
            expense: expenseInput.value,
            amount: amount,
            date: new Date(dateInput.value)
        }
        setExpenses([...expenses, expenseItems])
        Expenses(amount)
    }

  return (
    <div>
        <form onSubmit={print}>
            <div>
                <label htmlFor="Expense">Expense source: </label>
                <input 
                    type="text" 
                    name="Expense" 
                    id="Expense" 
                    {...expenseInput}
                />
            </div>
            <div>
                <label htmlFor="examount">Amount of expense: </label>
                <input
                    min="0"  
                    type="number" 
                    name="examount" 
                    id="examount" 
                    {...amountInput}
                />
            </div>
            <div>
                <label htmlFor="date">date: </label>
            <input 
                type="date" 
                name="date" 
                id="date"
            {...dateInput}
            />
            </div>
            <button> Add expense</button>
        </form>
        <ul>
            {expenses.map((item, index) =>(
                <li>
                    {item.expense}, {item.amount} EUR, on {item.date.toDateString()}
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Expense