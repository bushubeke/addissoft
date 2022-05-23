
import React, { Fragment} from 'react';

import { useState, useEffect } from 'react';
// import { Redirect } from 'react-router-dom';

import { selectUser } from '../appreducer';
import { useSelector} from 'react-redux'
import PageListView , { UserView }  from './paginatedlist';

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'




// #################################################3
 
// #################


// ################
function PaginatedListView() {
    const faskeUsers=[{
        "id": 1,
        "uid": "7146a156-333f-4105-a1fe-0e2e0819ec53",
        "email": "someone@gmail.com",
        "username": "superspecial",
        "first_name": "Super",
        "middle_name": "User",
        "last_name": "Account",
        "password": "$pbkdf2-sha512$25000$2FtLiXGuFWKM0XpvLQVAqPX.f0/p/d/737s3pvTe2/sfA.AcA8C4F6JUqtX6/z.nFKJU6v0/pxQCQMi51/pfS2ltba11DmGslbJWas2Zcy4$5ztPhLk2mHfhUzHqCr6HDR9lYgslpmyc.tgHB/w/qR/KOuMR05vYcneW3BggWhdWv5/.qOmve3PWR6tV90ntDA",
      
         },
         {
            "id": 2,
            "uid": "7146a156-333f-4105-a1fe-0e2e0819ec53",
            "email": "someone@gmail.com",
            "username": "superspecial",
            "first_name": "Super",
            "middle_name": "User",
            "last_name": "Account",
            "password": "$pbkdf2-sha512$25000$2FtLiXGuFWKM0XpvLQVAqPX.f0/p/d/737s3pvTe2/sfA.AcA8C4F6JUqtX6/z.nFKJU6v0/pxQCQMi51/pfS2ltba11DmGslbJWas2Zcy4$5ztPhLk2mHfhUzHqCr6HDR9lYgslpmyc.tgHB/w/qR/KOuMR05vYcneW3BggWhdWv5/.qOmve3PWR6tV90ntDA",
          
          },
          {
            "id": 3,
            "uid": "7146a156-333f-4105-a1fe-0e2e0819ec53",
            "email": "someone@gmail.com",
            "username": "superspecial",
            "first_name": "Super",
            "middle_name": "User",
            "last_name": "Account",
            "password": "$pbkdf2-sha512$25000$2FtLiXGuFWKM0XpvLQVAqPX.f0/p/d/737s3pvTe2/sfA.AcA8C4F6JUqtX6/z.nFKJU6v0/pxQCQMi51/pfS2ltba11DmGslbJWas2Zcy4$5ztPhLk2mHfhUzHqCr6HDR9lYgslpmyc.tgHB/w/qR/KOuMR05vYcneW3BggWhdWv5/.qOmve3PWR6tV90ntDA",
          
          },
          {
            "id": 4,
            "uid": "7146a156-333f-4105-a1fe-0e2e0819ec53",
            "email": "someone@gmail.com",
            "username": "superspecial",
            "first_name": "Super",
            "middle_name": "User",
            "last_name": "Account",
            "password": "$pbkdf2-sha512$25000$2FtLiXGuFWKM0XpvLQVAqPX.f0/p/d/737s3pvTe2/sfA.AcA8C4F6JUqtX6/z.nFKJU6v0/pxQCQMi51/pfS2ltba11DmGslbJWas2Zcy4$5ztPhLk2mHfhUzHqCr6HDR9lYgslpmyc.tgHB/w/qR/KOuMR05vYcneW3BggWhdWv5/.qOmve3PWR6tV90ntDA",
          
          },
          {
            "id": 5,
            "uid": "7146a156-333f-4105-a1fe-0e2e0819ec53",
            "email": "someone@gmail.com",
            "username": "superspecial",
            "first_name": "Super",
            "middle_name": "User",
            "last_name": "Account",
            "password": "$pbkdf2-sha512$25000$2FtLiXGuFWKM0XpvLQVAqPX.f0/p/d/737s3pvTe2/sfA.AcA8C4F6JUqtX6/z.nFKJU6v0/pxQCQMi51/pfS2ltba11DmGslbJWas2Zcy4$5ztPhLk2mHfhUzHqCr6HDR9lYgslpmyc.tgHB/w/qR/KOuMR05vYcneW3BggWhdWv5/.qOmve3PWR6tV90ntDA",
          
          },
          {
            "id": 6,
            "uid": "7146a156-333f-4105-a1fe-0e2e0819ec53",
            "email": "someone@gmail.com",
            "username": "superspecial",
            "first_name": "Super",
            "middle_name": "User",
            "last_name": "Account",
            "password": "$pbkdf2-sha512$25000$2FtLiXGuFWKM0XpvLQVAqPX.f0/p/d/737s3pvTe2/sfA.AcA8C4F6JUqtX6/z.nFKJU6v0/pxQCQMi51/pfS2ltba11DmGslbJWas2Zcy4$5ztPhLk2mHfhUzHqCr6HDR9lYgslpmyc.tgHB/w/qR/KOuMR05vYcneW3BggWhdWv5/.qOmve3PWR6tV90ntDA",
          
          },
          {
            "id": 7,
            "uid": "7146a156-333f-4105-a1fe-0e2e0819ec53",
            "email": "someone@gmail.com",
            "username": "superspecial",
            "first_name": "Super",
            "middle_name": "User",
            "last_name": "Account",
            "password": "$pbkdf2-sha512$25000$2FtLiXGuFWKM0XpvLQVAqPX.f0/p/d/737s3pvTe2/sfA.AcA8C4F6JUqtX6/z.nFKJU6v0/pxQCQMi51/pfS2ltba11DmGslbJWas2Zcy4$5ztPhLk2mHfhUzHqCr6HDR9lYgslpmyc.tgHB/w/qR/KOuMR05vYcneW3BggWhdWv5/.qOmve3PWR6tV90ntDA",
          
          },
          {
            "id": 8,
            "uid": "7146a156-333f-4105-a1fe-0e2e0819ec53",
            "email": "someone@gmail.com",
            "username": "superspecial",
            "first_name": "Super",
            "middle_name": "User",
            "last_name": "Account",
            "password": "$pbkdf2-sha512$25000$2FtLiXGuFWKM0XpvLQVAqPX.f0/p/d/737s3pvTe2/sfA.AcA8C4F6JUqtX6/z.nFKJU6v0/pxQCQMi51/pfS2ltba11DmGslbJWas2Zcy4$5ztPhLk2mHfhUzHqCr6HDR9lYgslpmyc.tgHB/w/qR/KOuMR05vYcneW3BggWhdWv5/.qOmve3PWR6tV90ntDA",
          
          },
          {
            "id": 9,
            "uid": "7146a156-333f-4105-a1fe-0e2e0819ec53",
            "email": "someone@gmail.com",
            "username": "superspecial",
            "first_name": "Super",
            "middle_name": "User",
            "last_name": "Account",
            "password": "$pbkdf2-sha512$25000$2FtLiXGuFWKM0XpvLQVAqPX.f0/p/d/737s3pvTe2/sfA.AcA8C4F6JUqtX6/z.nFKJU6v0/pxQCQMi51/pfS2ltba11DmGslbJWas2Zcy4$5ztPhLk2mHfhUzHqCr6HDR9lYgslpmyc.tgHB/w/qR/KOuMR05vYcneW3BggWhdWv5/.qOmve3PWR6tV90ntDA",
          
          }]
        // eslint-disable-next-line
         const [pageSize,setPageSize]=useState(5)
         // eslint-disable-next-line
         const [currentPage,setCurrentPage]=useState(1)
         
         const [defaultPage,setDefaultPage]=useState(1)
         useEffect(()=>{
            // try {
                
            //    let sec=document.querySelectorAll("#page-"+defaultPage.toString())
        
            // sec[0].classList.toggle("hidden")
            // } catch (error) {
            //     console.log(error)
            // }

         },[])
    return (  
        <div className="min-h-full w-full flex flex-col  items-start justify-center py-6 px-4 sm:px-6 lg:px-8">
                    {/* ############################## */}
                    <div className='self-end '>
                    <label htmlFor="points">Users Per page:</label>
                    <input className="bg-gray-700" type="range" id="points" name="points" min="5" max="30"></input>
                    </div>
                            <PageListView pagelist={faskeUsers} pagenumber="1" isdefault={true}/>
                        
                {/* #####################################################################333 */}

                <div className=" px-4 py-3 flex items-center w-full border-t border-gray-200 sm:px-6">
                   
                            <nav className="scrollbar-thin  scrollbar-track-gray-100 scrollbar-thumb-gray-300 overflow-hidden overflow-x-scroll  relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                             
                                {/* Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" */}
                               
                                <a
                                href="/"
                                className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                                >
                                2
                                </a>
                                <a
                                href="/"
                                className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium"
                                >
                                3
                                </a>
                                <span className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700">
                                ...
                                </span>
                              
                               

                            </nav>
                            </div>
                    
                      

                 {/* #####################################################################333 */}

                </div>
    );
}

export default function UserListView(){
    const login_status=useSelector(selectUser)
    // {console.log(login_status)}
    const faskeUsers=[{
        "id": 1,
        "uid": "7146a156-333f-4105-a1fe-0e2e0819ec53",
        "email": "someone@gmail.com",
        "username": "superspecial",
        "first_name": "Super",
        "middle_name": "User",
        "last_name": "Account",
        "password": "$pbkdf2-sha512$25000$2FtLiXGuFWKM0XpvLQVAqPX.f0/p/d/737s3pvTe2/sfA.AcA8C4F6JUqtX6/z.nFKJU6v0/pxQCQMi51/pfS2ltba11DmGslbJWas2Zcy4$5ztPhLk2mHfhUzHqCr6HDR9lYgslpmyc.tgHB/w/qR/KOuMR05vYcneW3BggWhdWv5/.qOmve3PWR6tV90ntDA",
      
         }]
    useEffect(()=>{
        // console.log(login_status)
    })
    return(
            <Fragment>
                {login_status ?  <PaginatedListView /> : <UserView data={faskeUsers[0]}/>}
            </Fragment>
            )
}

