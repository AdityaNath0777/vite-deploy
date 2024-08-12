import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='bg-sky-50 w-full min-h-14  flex justify-evenly  items-center px-4 py-3'>
                      <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                          <li>
                              <NavLink
                                  to = '/'
                                  className={({isActive}) =>
                                      `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent ${isActive ? "text-orange-600" : "text-gray-600" } lg:border-0 hover:text-orange-700 lg:p-0`
                                  }
                              >
                                  Home
                              </NavLink>
                          </li>
                          <li>
                              <NavLink
                                  to = '/about'
                                  className={({isActive}) =>
                                      `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent ${isActive ? "text-orange-600" : "text-gray-600" } lg:border-0 hover:text-orange-700 lg:p-0`
                                  }
                              >
                                  About
                              </NavLink>
                          </li>
                          <li>
                              <NavLink
                                  to = '/contact'
                                  className={({isActive}) =>
                                      `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent ${isActive ? "text-orange-600" : "text-gray-600" } lg:border-0 hover:text-orange-700 lg:p-0`
                                  }
                              >
                                  Contact
                              </NavLink>
                          </li>
                      </ul>
    </div>
  )
}

export default Navbar