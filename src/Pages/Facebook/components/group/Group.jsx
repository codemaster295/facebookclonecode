import { Add } from '@material-ui/icons'
import React from 'react'

const Group = () => {
    return (
        
          <div className="w-1/5 space-y-10 fixed right-0 top-20 p-5">
              <h1 className="font-bold text-gray-500 tracking-widest p-2    ">Group Conversations</h1>
              <div className="flex items-center space-x-5 bg-transparent hover:bg-gray-100 p-2 rounded-lg transition-all duration-100 ease-linear cursor-pointer">
                  <Add className="bg-gray-300 rounded-full" style={{ fontSize: 32 }}/>
                  <h1>Create New Group  </h1>
              </div>
          </div>
        
    )
}

export default Group
