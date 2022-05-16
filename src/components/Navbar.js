import React,{useState} from 'react'
import './Navbar.css'
import {HiMenuAlt2} from 'react-icons/hi'

const Navbar = () => {

  const[scroll,setScroll]=useState(false)

  //handle scroll
  const handleScroll=()=>{
    if(window.scrollY > 70){
      setScroll(true)
    }else{
      setScroll(false)
    }
  }
  //register the scroll event
  window.addEventListener('scroll',handleScroll)
  console.log("the value of scroll ",scroll)
  return (
    <header className={`${scroll ? 'bg':''}`}>
        <div className='nav_brand'>
            <span>La</span><span>Shoes</span> 
        </div>
        <nav>
            <ul>
                <li><a href="#">Home</a> </li>
                <li><a href="#">About</a> </li>
                <li><a href="#">Services</a> </li>
                <li><a href="#">Contact</a> </li>
            </ul>
        </nav>
        <HiMenuAlt2 className='menu'/>
    </header>
  )
}

export default Navbar