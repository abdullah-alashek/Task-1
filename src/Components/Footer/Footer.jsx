import React from 'react'
import viteLogo from '../../assets/LogoMakr-7FT3Xj.png'
import './Footer.css'
const Footer = () => {
  return (
    <div className='footer'>
      <img src={viteLogo}></img>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Docs</li>
        <li>GitHub</li>
      </ul>
      <div className='icons'>
        <a><i class="fa-brands fa-facebook"></i></a>
        <a><i class="fa-brands fa-twitter"></i></a>
        <a><i class="fa-brands fa-tiktok"></i></a>
        <a><i class="fa-brands fa-linkedin"></i></a>
        <a><i class="fa-brands fa-instagram"></i></a>
        <a><i class="fa-brands fa-github"></i></a>
      </div>
      <p>© Copyright 2023 Nextjs Starter. Powered with <i class="fa-solid fa-heart"></i> by <a href='#'>Abdullah Alashek</a></p>
    </div>
  )
}

export default Footer