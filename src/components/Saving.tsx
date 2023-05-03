import React, {useState, useEffect} from 'react'
import { useInput } from '../hooks'

interface SavingProps {
    savings: number
}

const Saving = ({savings}: SavingProps) => {
    const [target, setTarget] = useState(0)
    const targetInput = useInput()

    const setReset = (e: React.FormEvent) => {
        e.preventDefault()
        setTarget(parseInt(targetInput.value))
    }

    const savingsPercentage = target > 0 ? (savings / target) * 100 : 0;

  return (
    <div>
        <form onSubmit={setReset}>
        <div>
            <label htmlFor="target">Target: </label>
            <input
                min="0" 
                type="number" 
                name="target" 
                id="target" 
                {...targetInput}
            />
        </div>
        <button>Rest</button>
        </form>
        <p>Current saving: {savings}</p>
        <p>Target: {target || 0}</p>
        <label>Progress: {savingsPercentage.toFixed()}%</label>
        <progress value={savings} max={target}>

        </progress>
    </div>
  )
}

export default Saving