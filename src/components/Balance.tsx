import { useInput } from "../hooks"

interface SavProp {
    Balance: number;
    onSavings: (amount: number) => void;
  }
  

const Balance = ({ Balance, onSavings }: SavProp) => {
    const transferInput = useInput()

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const transferAmount = parseFloat(transferInput.value);
      onSavings(transferAmount);
    };
    
  return (
    <div>
        <div> Current balance: {Balance} </div>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="">Transfer to saving account</label>
                <input
                    min="0"  
                    type="number" 
                    name="number" 
                    id="number"
                    {...transferInput} 
                />
            </div>
            <button>Transfer</button>
        </form>
    </div>
  )
}

export default Balance