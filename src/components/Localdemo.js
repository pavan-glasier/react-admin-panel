import React, { useState } from 'react'
import Formdemo from './Formdemo';

const ALL_EXPENSES = [
  { id: 1, name: 'Buy a book', amount: 20 },
  { id: 2, name: 'Buy a milk', amount: 5 },
  { id: 3, name: 'Book a flight ticket', amount: 225 }
]

function Localdemo() {
  const [expenses, setExpenses] = useState(ALL_EXPENSES)
  

  return (
    <div className='text-center'>
      <div fluid>
        <h3 className='display-6'>
          Expense Tracker React App
        </h3>
        <div>
          <p>
            Total Expense:{' '}
            <span className='text-success'>
              ${' '}
              {expenses.reduce((accumulator, currentValue) => {
                return (accumulator += parseInt(currentValue.amount))
              }, 0)}
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Localdemo