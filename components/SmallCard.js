import { HeartIcon,PlusIcon } from '@heroicons/react/outline'
import products from "../components/products.json"


  
  export default function Example() {
    return (
      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Customers also purchased</h2>
  
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div key={product.title} className="group relative">
                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-80 lg:h-80 lg:aspect-none">
                  <img
                    src={product.imageUrl}
                    alt={product.heading}
                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                  />
                  
                </div>
                <HeartIcon className='text-white h-[30px] absolute justify-center m-auto right-5 top-5 sm:top-0 sm:right-2 z-10 hover:cursor-grab '  />
                 <PlusIcon className='text-white h-[30px] absolute justify-center m-auto right-5 top-20 sm:top-12 sm:right-2 z-10 hover:cursor-grab '/>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href='#'>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.heading}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{product.productRating}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">{product.productPrice}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }