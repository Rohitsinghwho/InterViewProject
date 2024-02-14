import React from 'react'
// import {Card} from 'flowbite-react'
export default function CardComp() {
  return (
    <div className="w-[100px] sm:w-[250px] rounded-md border mt-3">
    <img
      src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
      alt="Laptop"
      className=" h-[50px]  sm:h-[200px] sm:w-full rounded-md object-cover"
    />
    <div className="p-4">
      <h1 className="text-md sm:text-lg font-semibold">About Macbook</h1>
      <p className="mt-3 text-sm text-gray-600 line-clamp-1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?
      </p>
    
    </div>
</div>

  )
}
