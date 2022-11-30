import styles from './Error.module.css'


const Error = (props) =>{
    const {
        icon     = 'mdi mdi-home',
        title    = 'Ops! Erro 404',
        subtitle = 'Página não encontrada',
        style={}
    } = props
    // console.log('Error', icon)
    
    return(
        <div className={styles.error} style={style}>
            <div className={styles.title}>
                <span className={`${icon}`}>{title}</span>
            </div>
            <hr/>
            <p className={styles.subtitle}>{subtitle}</p>
        </div>        
    )
}
export default Error