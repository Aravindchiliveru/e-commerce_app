import React from 'react'
import Image from 'next/image'
import img15 from '../images/img (15).jpg'
import bannerb from '../images/bannerb.jpg'
import record from '../components/products.json'

function SmallCard() {
  return (
    <div>
        <div class="bg-white">
  <div class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
    <h2 class="text-2xl font-extrabold tracking-tight text-gray-900">Customers also purchased</h2>

    <div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
      <div class="group relative">
      {record.map(item => (<div class="mt-4 flex justify-between">
              <div>
                  <h3 class="text-sm text-gray-700">
                      <a href="#">
                          <span aria-hidden="true" class="absolute inset-0"></span>
                          {item.title}
                          <Image src={item.imageUrl} layout='fill'/>
                      </a>
                  </h3>
                  <p class="mt-1 text-sm text-gray-500">Black</p>
              </div>
              <p class="text-sm font-medium text-gray-900">$35</p>

          </div>
         ))}
      </div>


    </div>
  </div>
</div>
    </div>
  )
}

export default SmallCard