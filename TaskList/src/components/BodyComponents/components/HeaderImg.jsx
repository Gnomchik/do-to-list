import React from 'react'
import { NavLink } from 'react-router-dom'

export default function HeaderImg() {
  return (
      <div className="p-5 text-center bg-image" style={{ backgroundImage: 'url(./Img/book.jpg)', height: '400px', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
          <div className="mask" style={{ backgroundColor: 'black' }}></div>
          <div className="d-flex justify-content-center align-items-center h-100">
              <div className="text-white">
                  <h1 className="mb-3">Tasks Storage</h1>
                  <h4 className="mb-3">Create New Task Page</h4>
                  <NavLink data-mdb-ripple-init className="btn btn-outline-light btn-lg" to="createStorage" role="button">Create</NavLink>
              </div>
          </div>
      </div>
  )
}
