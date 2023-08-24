import React from 'react'
import './Header.css'

export default function Header({ShowContactModalHandler}) {
  return (
    <div className='Header'>

        <div className="HeaderInfos">
          <div></div>
          <div>
            <h1>Sayman Teb</h1>
            <span>Avaye Zhian</span>
            <h3>Manufacturer of medical clothing</h3>
            <button onClick={ShowContactModalHandler}>Contact Us</button>
          </div>
        </div>
    </div>
  )
}