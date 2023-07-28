import { useRef } from 'react'
import './Navbar.css'


const Navbar = ({logo , list}) => {

  const menuRev = useRef();
  const showmenu = () =>{
    menuRev.current.classList.toggle("active")
  }
  return (
    <>
      <nav>
        <div className='logo'>
          <img src={logo}></img>
        </div>
        <div onClick={showmenu} className='dropmenu'>
          <div className='line'></div>
          <div className='line'></div>
          <div className='line'></div>
        </div>
        <div ref={menuRev} className='menu'>
          <a onClick={showmenu}><i class="fa-regular fa-rectangle-xmark"></i></a>
          <ul>
          {
            list.map((item) =>(
              <li key={item.id}>{item.name}</li>
            ))
          }
          </ul>
        </div>
      </nav>
    </>
  )
}
export default Navbar