import React from 'react'

function Producrs() {
    const products = [
       {
        name:"MacBook Pro 16",
        category:"Laptops",
        date:"Dec 10, 2024",
        value:"In Stock"
       },
              {
        name:"iPad Air",
        category:"Tablets",
        date:"Dec 7, 2024",
        value:"In Stock"
       },
              {
        name:"Dell XPS 13",
        category:"Laptops",
        date:"Dec 9, 2024",
        value:"In Stock"
       },
              {
        name:"Surface Pro 9",
        category:"Tablets",
        date:"Dec 6, 2024",
        value:"Out of Stock"
       },
    {
        name:"iPhone 15 Pro",
        category:"Mobile",
        date:"Dec 8, 2024",
        value:"Low Stock"
       },
    ];
  return (
    <section className='border border-gray-100 rounded-2xl'>
        <div className=' p-4 mb-4 py-7'>
            <h1 className='text-xl font-bold'>Recent Added Products</h1>
        </div>
        <div className='grid md:grid-cols-3 gap-5'>
            {products.map((product, index) => (
                <div key={index} className="p-4 border border-gray-200 rounded-md flex items-center justify-between">
                    <div>
                        <h2 className='font-bold text-[18px]'>{product.name}</h2>
                        <p className='text-sm'>{product.category}</p>
                    
                        <p className='text-sm'>{product.date}</p>
                    
                    </div>
                    
                        <p
                        className={`text-sm font-medium rounded-2xl ${
                            product.value.toLowerCase() === "in stock"
                            ? "text-green-700 bg-green-200 py-0.5 px-1.5 "
                            : product.value.toLowerCase() === "out of stock"
                            ? "text-red-600 py-0.5 px-1.5 bg-red-300"
                            : product.value.toLowerCase() === "low stock"
                            ? "text-yellow-500 py-0.5 px-1.5 bg-amber-200"
                            : ""
                        }`}
                        >
                        {product.value}
                        </p>


                
                </div>
            ))}
        </div>
    </section>
  )
}

export default Producrs