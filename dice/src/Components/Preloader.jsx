import React, { useEffect } from 'react'
import './Preloader.css'
import { preLoaderAnim } from '../Animation/Index';

const Preloader = () => {
        useEffect(()=>{
                preLoaderAnim()
        },1000);
  return (
    <div className="preloader">
        <div className="text-container">
                <span>DICE</span>
                <span>LUCK</span>
                <span>GAME</span>
        </div>
    </div>
  )
}

export default Preloader
