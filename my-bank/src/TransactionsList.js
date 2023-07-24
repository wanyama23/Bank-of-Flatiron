import React from "react";
import Transaction from "./Transaction";
function TransactionsList({transactions, onDelete}) {
  const list = transactions.map((item)=>{
    return <Transaction key={item.id} date={item.date} description={item.description} category={item.category} amount={item.amount} onDelete={()=>onDelete(item.id)}/>;
  })
  return (
    
    <table>
      <thead>
        <tr>
          <th>
             <h3>Date</h3>
          </th>
          <th>
             <h3>Description</h3>
          </th>
          <th>
             <h3>Category</h3>
          </th>
          <th>
             <h3>Amount</h3>
          </th>
          
        </tr>
        </thead>
        <tbody>
        {list}
      </tbody>
    </table>
    
  );
  {Transaction.map((item, id)=>{
    return(
      <div>
        <span>Transaction</span><button id ={id}Delete></button>
      </div>
    )
  })}
}



export default TransactionsList;