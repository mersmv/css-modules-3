import { useState } from 'react'
import style from './Header.module.css'

const Header = () => {
    const [menu, setMenu] = useState(true)
    return (
        <div className={style['header-container']}>
            <img className={style['header-logo']} src="./public/images/logo.svg" alt="" />
            
            <img onClick={() => setMenu(!menu)} className={style['header-burguer']} src={menu ? './public/images/icon-menu.svg' : './public/images/icon-menu-close.svg'}/>
        
            <div  className={menu ? `
            ${style['menu-container']} ${style['menu-container-show']}` : style['menu-container']}>
                <ul>
                    <li>
                        <a href="">Home</a>
                    </li>
                    <li>
                        <a href="">New</a>
                    </li>
                    <li>
                        <a href="">Popular</a>
                    </li>
                    <li>
                        <a href="">Trending</a>
                    </li>
                    <li>
                        <a href="">Categories</a>
                    </li>
                </ul>
            </div>
        </div>
    
)}




export default Header