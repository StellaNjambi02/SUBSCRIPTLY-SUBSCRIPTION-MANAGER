import React from 'react'
import TableRow from "./TableRow"
import "./Table.css"

function Table( {subscriptions} ) {
  return (
    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Category</th>
                <th>Cost</th>
                <th>Billing Cycle</th>
                <th>Date of Payment</th>
                <th>Days Left</th>
                <th>Status</th>
            </tr>
        </thead>
        <tbody>
            {subscriptions.map(subscription => (
                <TableRow key={subscription.id} subscription={subscription}/>
            ))}
        </tbody>
    </table>
  )
}

export default Table