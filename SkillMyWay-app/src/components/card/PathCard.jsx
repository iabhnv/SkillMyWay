import React from 'react'

function PathCard() {
  return (
    <div className="card card-compact bg-slate-50 w-56 shadow-xl">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <p className="card-title text-sm">Front-end Course</p>
    {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
    <div className="card-actions justify-end">
        <p className='text-slate-500 font-light text-xs'>7 weeks</p>
      <button className="text-teal-800 text-xs font-semibold  hover:text-teal-600">Enroll</button>
    </div>
  </div>
</div>
  )
}

export default PathCard