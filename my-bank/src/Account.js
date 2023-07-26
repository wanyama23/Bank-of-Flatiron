import React, { useEffect, useState } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransaction from "./AddTransaction";
import Transaction from  "./Transaction";
// import DeleteTransaction from "./DeleteTransaction";
function Account() {
  const [transaction, setTransaction] = useState([])
  const [query, setQuery] = useState("")
  useEffect(() => {
    fetch("http://localhost:8001/transactions?q=" + query)
      .then((resp) => resp.json())
      .then(transaction => setTransaction(transaction))
  }, [query])
  function handleSearch(e) {
    setQuery(e.target.value)
 }
 function deleteTransaction(id){
  const trans = transaction.filter(transaction=> transaction.id !==id)
  setTransaction(trans)
 }
  return (
    <div>
      <Search handleSearch={handleSearch} />
      <AddTransaction />
      <TransactionsList transactions={transaction} onDelete = {deleteTransaction} />
    </div>
  );
  // {Transaction.map((item, id)=>{
  //   return(
  //     <div>
  //       <span>Transaction</span><button id ={id}Delete></button>
  //     </div>
  //   )
  // })}
}

export default Account ;