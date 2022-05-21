import React from 'react'
import Header from '../components/Header'
import { useStateValue } from '../components/StateProvider';

function Favorites() {
    const [{basket, user}, dispatch] = useStateValue();


  return (
    <div>
        <Header placeholder={undefined} />
        <p>Subtotal = {basket.length}</p>
    </div>
  )
}

export default Favorites