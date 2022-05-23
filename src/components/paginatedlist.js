
import { useState, useEffect,useRef } from 'react';
import { PaperClipIcon } from '@heroicons/react/solid';

export function UserView({data}){
    
    // eslint-disable-next-line
    const [isHidden, setHidden] = useState(false);
    
    
    // let s=this.state1
    const bodyref=useRef(null)
    useEffect(() => {
       let childn=Array.from(bodyref.current.children)
    //    console.log()
    childn[2].classList.toggle("hidden") 
    
      },[isHidden]);
   

  

return(

            <div className="bg-gray-50  w-full  border border-black border-1 m-2 shadow overflow-hidden sm:rounded-lg">             
                    <div ref={bodyref} onClick={setHidden} className="w-full  px-4 py-5 sm:px-6">
                         <h3 className="text-lg leading-6 font-medium text-gray-900">User Informaiton</h3>
                         <p className="mt-1 max-w-2xl text-sm text-gray-500">Personal details and application.</p>
                        
                        <div className="border-t border-gray-500">
                            <dl>    
                            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">Full name</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{data.first_name +" "+ data.midlle_name +" " + data.last_name}</dd>
                            </div>
                            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">User email</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{data.email}</dd>
                            </div>
                            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">Username</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{data.username}</dd>
                            </div>
                            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">id</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{data.id}</dd>
                            </div>
                            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">uuid</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{data.uid}</dd>
                            </div>
                            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">Password</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{data.password}</dd>
                            </div>
                           
                            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">Roles</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                <ul  className="border border-gray-200 rounded-md divide-y divide-gray-200">
                                    <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                                    <div className="w-0 flex-1 flex items-center">
                                        <PaperClipIcon className="flex-shrink-0 h-5 w-5 text-gray-400" aria-hidden="true" />
                                        <span className="ml-2 flex-1 w-0 truncate">resume_back_end_developer.pdf</span>
                                    </div>
                                    <div className="ml-4 flex-shrink-0">
                                        <a href="/" className="font-medium text-indigo-600 hover:text-indigo-500">
                                        Download
                                        </a>
                                    </div>
                                    </li>
                                    <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                                    <div className="w-0 flex-1 flex items-center">
                                        <PaperClipIcon className="flex-shrink-0 h-5 w-5 text-gray-400" aria-hidden="true" />
                                        <span className="ml-2 flex-1 w-0 truncate">coverletter_back_end_developer.pdf</span>
                                    </div>
                                    <div className="ml-4 flex-shrink-0">
                                        <a href="/" className="font-medium text-indigo-600 hover:text-indigo-500">
                                        Download
                                        </a>
                                    </div>
                                    </li>
                                </ul>
                                </dd>
                            </div>
                            </dl>
                        </div>
                     </div>
             </div>
)

}


export default function PageListView({pagelist,pagenumber,isdefault}) {
   
          
      
       
          
    return (  
        <div className={isdefault ? "w-full":"w-full hidden"} id={"page-"+pagenumber}>
                    {/* ############################## */}
               
            {              
                pagelist.map(function (person){
                                return(  <UserView data={person} key={"user-"+person.id.toString()} /> )
                                   })                                        
                              
                                   
                               }
                        
                {/* #####################################################################333 */}
                </div>
    );
}