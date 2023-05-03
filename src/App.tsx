import React, {useState} from 'react'
import './App.css'
import Income from './components/Income'
import Expense from './components/Expense'
import Saving from './components/Saving'
import Balance from './components/Balance'

const App = () => {
  const [balance, setBalance] = useState(0)
  const [savings, setSavings] = useState(0)

  const Incomes = (amount: number) => {
    setBalance(p => p + amount)
  }

  const Expenses = (amount: number) => {
    if(amount > balance){
      alert('Expense cannot be greater than the current balance.')
      return
    }
    setBalance(p => p-amount)
  }

  const onSavings = (amount: number) => {
    if(amount > balance) {
      alert("you dont have enought money")
      return
    }
    setBalance(p => p - amount)
    setSavings(p => p + amount)
  }

  return (
    <main className='main'>
      <section className='main__acounts'>
        <Income Incomes={Incomes}/>
        <Expense Expenses={Expenses}/>
        <Saving savings={savings}/>
      </section>
      <section className='main__balance'>
        <Balance Balance={balance} onSavings={onSavings}/>
      </section>
    </main>
  )
}

export default App