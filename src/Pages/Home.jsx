import React from 'react'
import SideBar from '../Components/SideNav/Sidenav'
import TopBar from '../Components/Upperbar/Upperbar'
import './Home.css'

const Home = () => {
  return (
    <>
    <div  className='Homecontainer'>
    <div className='sidecontainer'>
        <SideBar/>
    </div>
    <div className='topbarcontainer'>
      <TopBar/>
    </div>
    </div>
    </>
  )
}

export default Home