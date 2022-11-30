import MainMenu from '../MainMenu'

import styles from './Navbar.module.css'


const Navbar = (props)=>{
    const { 
        menus={}, 
        style={} 
    } = props
    // console.log('Navbar', style)
    
    return (
        <nav className={styles.navMenu}>
            <MainMenu menu={menus.itemsMainMenu}/>  
        </nav>
    )
}

export default Navbar