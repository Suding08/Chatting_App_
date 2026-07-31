import React, { useContext } from 'react'
import Sidebar from '../components/Sidebar'
import ChatContainer from '../components/ChatContainer'
import RightSidebar from '../components/RightSidebar'
import { ChatContext } from '../../context/ChatContext'

const HomePage = ()=> {

    const {selectedUser} = useContext(ChatContext)

  return (
    <div className='border w-full h-screen sm:px-[10%] sm:py-[5%]'>
      <div className={`text-white backdrop-blur-xl border-2 border-gray-200 rounded-2xl h-[85vh] grid grid-cols-1 relative overflow-hidden ${selectedUser ? 'md:grid-cols-[3fr_3.5fr_3fr] xl:grid-cols-[1.5fr_2.5fr_1.5fr]' : 'md:grid-cols-2'}`}>
        <Sidebar />
        <ChatContainer />
        <RightSidebar />
      </div>
    </div>
  )
}

export default HomePage
