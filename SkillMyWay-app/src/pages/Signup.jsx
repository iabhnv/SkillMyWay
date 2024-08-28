import React from 'react'

function Signup() {
  return (
    <div>
        <div className="hero bg-slate-50 min-h-screen">
  <div className="hero-content flex-col lg:flex-col">
    <div className="text-center lg:text-left">
      <h1 className="text-3xl font-bold text-teal-900">Signup</h1>
    </div>
    <div className="card bg-base-100 w-96 max-w-sm shrink-0 shadow-2xl">
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required />
          <label className="label justify-between">
            <a href="#" className="label-text-alt link link-hover">Already have an account?</a>
            <a href="#" className="label-text-alt link link-hover text-teal-900">Login</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary bg-teal-700 text-slate-50 hover:bg-teal-800">Login</button>
        </div>
      </form>
    </div>
  </div>
</div>
    </div>
  )
}

export default Signup