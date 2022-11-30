import styles from './Brand.module.css'


const Brand = (props) =>{
    const {
        leftSymbol = "{ ",
        texts = {
            1:     "REACT",
            2:     "APP"
        },
        brand       = "©",
        rightSymbol = " }"  
    } = props
    
    return (
        <span>
            <span className={styles.leftSymbol}> {leftSymbol}</span>
            <span className={styles.logoText1}>{texts[1]}</span>
            <span className={styles.logoText2}>{texts[2]}</span>
            <span className={styles.rightSymbol}>{rightSymbol}</span>
            <span className={styles.brand}>{brand}</span>
        </span>
    )
}

export default Brand