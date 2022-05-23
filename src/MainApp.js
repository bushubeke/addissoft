
import  Footer  from './components/Footer';

import RegisterForm from './components/register';
import LoginForm from './components/login';
import {
 
  Routes,
  Route,
  Link

} from "react-router-dom";
// import { useSelector } from 'react-redux'

import { Adjustments } from "heroicons-react";
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import BodyComp from './components/Body';
import UserListView from './components/usersview';
import { logout,selectUser } from './appreducer';
import {useDispatch,useSelector} from 'react-redux'
import Pagination from './components/pagination';

// #######################################################
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  // ###########################
  

export default function MainApp() {

    const login_status=useSelector(selectUser)
    const dispatch=useDispatch()
    const butstyle="group relative m-0 sm:m-3 flex  font-bold justify-center py-2 px-4  border border-solid text-sm  rounded-md text-black bg-white hover:bg-stone-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    return (
      
      <div className="h-screen w-screen min-w-96 border-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 p-2 border-black overflow-y-scroll font-mono">
          {/* #########################################3  */}
          <div className="flex items-center min-w-full h-20 bg-gray-300 m-1  p-2 ">
          <div className="bg-stone-900 rounded-md h-full flex items-center text-gray-50 p-2 m-1">
            
            <h1 className="object-center font-bold text-xs sm:text-3xl align-left">User Admin Board</h1>
            
            </div>
          <div className=" flex-auto p-2 border-black border-3 m-1 "></div>
          <div className="flex flex-row h-full items-center border-black border-3 p-2 m-1  ">
           
                      {/* ################################################# */}
                      {/* ################################################# */}
                    
        <Menu as="div" className="relative inline-block font-bold text-left">
        <div className='flex flex-row '>
        {login_status ? <button  onClick={()=>dispatch(logout())} className={butstyle}>
              Logout
          </button> : '' } 
          <Menu.Button className={butstyle}>
         
            <Adjustments size={24}/>
            {/* <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" /> */}
          </Menu.Button>
          
         
        </div>
  
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          
          <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none">
            <div className="py-1">
            <Link to="/login">
              <Menu.Item>
                {({ active }) => (
                  <div
                    
          
                    className={classNames(
                      active ? 'hover:bg-stone-900 hover:text-gray-50 bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm'
                    )}
                  >
                    Login
                  </div>
                )}
              </Menu.Item>
              </Link>
              <Link to="/register">           
               <Menu.Item>
                {({ active }) => (
                  <div
                   
                    className={classNames(
                      active ? 'hover:bg-stone-900 hover:text-gray-50 bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm'
                    )}
                  >
                    Register User
                  </div>
                )}
              </Menu.Item>
              </Link>
              <Link to="/users">           
               <Menu.Item>
                {({ active }) => (
                  <div
                    
                    className={classNames(
                      active ? 'hover:bg-stone-900 hover:text-gray-50 bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm'
                    )}
                  >
                    Users
                  </div>
                )}
              </Menu.Item>
              </Link>
              <Link to="/pagination">           
               <Menu.Item>
                {({ active }) => (
                  <div                   
                    className={classNames(
                      active ? 'hover:bg-stone-900 hover:text-gray-50 bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm'
                    )}
                  >
                    Pagination
                  </div>
                )}
              </Menu.Item>
              </Link>
  
            </div>
  
            
          </Menu.Items>
        </Transition>
      </Menu>
       
                      {/* ################################################### */}
          </div>
        </div>       
          {/* ########################################## */}
          
          <div className="flex items-center justify-center min-w-full min-h-full bg-slate-100 m-1 p-2">
          
           <Routes>
           <Route path="/" element={<BodyComp/>}/>
           
           <Route path="register" element={<RegisterForm/>}/ >
           
           <Route path="login" element={<LoginForm/> }/ >
           <Route path="users" element={<UserListView/> }/ >
           <Route path="pagination" element={<Pagination/> }/ >
           
           </Routes>
           
        </div>
         
         
         <Footer/>
      </div>
      
      );
  }