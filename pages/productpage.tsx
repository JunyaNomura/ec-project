import React from 'react'
import Navbar2 from '../components/Navbar2'

const productpage = () => {
  return (
    <>
      <Navbar2 />
      <div className="md:flex m-10">
        <div className="md:flex-shrink-0">
          <img className="rounded-lg md:w-56" src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=448&q=80" width="448" height="299" alt="Woman paying for a purchase" />
        </div>
        <div className="mt-4 md:mt-0 md:ml-6">
          <p className="uppercase tracking-wide text-sm text-indigo-600 font-bold">Lip</p>
          <p className="block mt-1 text-lg leading-tight font-semibold text-gray-900 hover:underline">
            Confident Lip(Summer)
          </p>
          <p>¥3,200</p>
          <p className="mt-2 text-gray-600">それは多年はなはだその増減院というのの後でしるます。初めて事実を意味家は必ずしもこの相当ですででもでしてならなくをもお話し考えでですて、どうにはできででなかろた。</p>
        </div>
      </div>
    </>
  )
}

export default productpage