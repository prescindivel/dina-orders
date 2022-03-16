import type { NextPage } from 'next'
import Image from 'next/image'
import data from './data'

const Products: NextPage = () => {
  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold  text-gray-900">Ovos de Páscoa</h2>
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {data.map((item) => (
            <div key={item.category} className="group relative">
              <div className="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                <Image
                  layout="responsive"
                  src={item.image}
                  alt="Front of men&#039;s Basic Tee in black."
                  width="100%"
                  height="100%"
                  className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href="#">
                      <span
                        aria-hidden="true"
                        className="absolute inset-0"
                      ></span>
                      {item.subcategory}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{item.category}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">R$30,00</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Products
