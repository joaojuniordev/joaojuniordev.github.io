import { Link } from 'react-router-dom'

import styles from './Logo.module.css'
import Brand from './Brand'


const Logo = (props) =>{
    const {
        leftSymbol  = "{. ",
        texts       = {1:"Brand", 2:".LOGO"},
        brand       = "®",
        rightSymbol = ".}",
        style={}
    } = props
    // console.log('Logo', style)

    return(
        <div className={styles.logo} style={style}>
            <Link to="/" className={styles.logo}>
                <Brand 
                leftSymbol  = {leftSymbol}
                texts       = {texts} 
                brand       = {brand}
                rightSymbol = {rightSymbol}
                />
            </Link>
        </div>
    )
}

export default Logo