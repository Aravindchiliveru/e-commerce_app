import React from 'react'
import Header from '../components/Header'
import FavProduct from '../components/FavProduct';
import { useStateValue } from '../components/StateProvider';

function Favorites() {
  const [{favs}, dispatcher] = useStateValue()

  return (
    <>
    <Header />
    <div>

            <div className=" top-14 w-full h-full bg-black bg-opacity-90 overflow-y-auto overflow-x-hidden fixed sticky-0 " id="chec-div">
                <div className="w-full absolute z-10 right-0 h-full overflow-x-hidden transform translate-x-0 transition ease-in-out duration-700" id="checkout">
                    <div className="flex md:flex-row flex-col justify-end" id="cart">
                        <div className="lg:w-1/2 w-full md:pl-10 pl-4 pr-10 md:pr-4 md:py-12 py-8 bg-white overflow-y-auto overflow-x-hidden h-screen" id="scroll">
                            
                            <p className="text-5xl font-black leading-10 text-gray-800 pt-3">Favorites</p>

                                {favs.map(item => (
                                <FavProduct 
                                    key={item.id}
                                    id={item.id}
                                    imageUrl = {item.image}
                                    title = {item.title}
                                    productPrice = {item.price}
                                    productRating = {item.rating}
                                />
                                ))}

                            
                            
                        </div>
                    </div>
                </div>
            </div>
        
    </div>
    

    <style>
        {` /* width */
        #scroll::-webkit-scrollbar {
            width: 1px;
        }

        /* Track */
        #scroll::-webkit-scrollbar-track {
            background: #f1f1f1;
        }

        /* Handle */
        #scroll::-webkit-scrollbar-thumb {
            background: rgb(133, 132, 132);
        }
`}
    </style>
</>
  )
}

export default Favorites