import React from "react";
import Transaction from "./Transaction";

function DeleteTransaction() {
    const [date, setDate] = ("")
    const [description, setDescription] = ("")
    const [category, setCategory] = ("")
    const [amount, setAmount] = ("")
    function handleDelete(e) {
      fetch("http://localhost:8001/transactions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          date: date,
          description: description,
          category: category,
          amount: amount,
        }),
      });
       alert("deleted successfully")
    }
    return (<div>
        <form ondelete={handleDelete} >
          <div>
            <input value={date} onChange={(e) => setDate(e.target.value)} type="date" name="date" />
            <input value={description} onChange={(e) => setDescription(e.target.value)} type="text" name="description" placeholder="Description" />
            <input value={category} onChange={(e) => setCategory(e.target.value)} type="text" name="category" placeholder="Category" />
            <input value={amount} onChange={(e) => setAmount(e.target.value)} type="number" name="amount" placeholder="Amount" step="0" />
          </div>
          
  <button>
            Delete Transaction
          </button>
        </form>
      </div>)
      
  
      
      
    
     };
export default DeleteTransaction;