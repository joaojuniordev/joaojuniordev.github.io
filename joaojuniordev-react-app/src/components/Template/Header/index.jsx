// import SidebarMobile from '../SidebarMobile.off.'
import Logo from '../Logo'
import styles from './Header.module.css'

import Navbar from '../Navbar'
import avatar from '../../../assets/img/avatar.png'


const Header = (props)=>{
    const { 
        menus={}, 
        companyInfo={}, 
        avatarInfo={}, 
        style={} 
    } = props
    console.log('Header', style)
    
    const fantasyName = companyInfo.fantasyName.split(' ')
    const texts = {
        1: fantasyName[0],
        2: fantasyName[1]
    }

    return (
        <header className="" >
            <Logo texts={texts} />
            <div className={styles.mainMenu} style={style.mainMenu}>
                <div className={styles.primaryMenu}>
                    <Navbar menus={menus}/>
                </div>
                <div className={styles.userMenu} >
                    <div className={styles.userTitles}>
                        <span className="d-block m-0 p-0 text-white">{ avatarInfo.firstName } { avatarInfo.lastName || 'Anonymous' }</span>
                        <small className={styles.userSubtitle}>{ avatarInfo.userName || '@anonymous' }</small>
                    </div>
                    <img src={avatar} alt='avatar'/>
                    <span className="mdi mdi-chevron-down text-white"></span>
                </div>            
            </div>
            {/* <SidebarMobile 
            menus={menus}
            companyInfo={companyInfo}
            style={style}
            /> */}
        </header>
    )
}

export default Header