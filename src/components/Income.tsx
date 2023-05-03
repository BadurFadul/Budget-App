import React, { useState } from 'react'
import { useInput } from '../hooks'

interface Income {
    salary: string
    amount: number
    date: Date
}

interface Incomepros {
    Incomes: (amount: number) => void
}

const Income = ({Incomes}:Incomepros) => {
    const salaryInput = useInput()
    const amountInput = useInput()
    const dateInput = useInput()
    const [income, setIncome] = useState<Income[]>([])

    const print = (e: React.FormEvent) => {
        e.preventDefault()
        const amount = Number(amountInput.value)
        const incomeitem: Income = {
            salary: salaryInput.value,
            amount: amount,
            date: new Date(dateInput.value)
        }
        setIncome([...income, incomeitem])
        Incomes(amount)
    }

  return (
    <div>
        <form onSubmit={print}>
            <div>
                <label htmlFor="salary">salary: </label>
                <input 
                    type="text" 
                    name="salary" 
                    id="salary" 
                    {...salaryInput}
                />
            </div>
            <div>
                <label htmlFor="amount">amount: </label>
                <input
                    min="0"  
                    type="number" 
                    name="amount" 
                    id="amount" 
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
            <button> Add income</button>
        </form>
        <ul>
            {income.map((item, index) => (
                <li key={index}>
                    {item.salary}, {item.amount} EUR, ON {item.date.toDateString()}
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Income