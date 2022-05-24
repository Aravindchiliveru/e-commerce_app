import React, { useState } from 'react'
import CurrencyFormat from 'react-currency-format'
import {getBasketTotal} from './reducer'
import { useStateValue } from './StateProvider'

function Subtotal() {
    const [{basket}, dispatch] = useStateValue();
  return (
    <div>
        <CurrencyFormat renderText={(value) => (
            <>
             ({basket?.length} items):
            <strong> {value} </strong>
            </>
        )} 
        decimalScale = {2}
        value = {0}
        displayType = {'text'}
        thousandSeperator = {true}
        />
    </div>
  )
}

export default Subtotal