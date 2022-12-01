import styles from './Home.module.css'


const Home = (props) =>{
    const {
        style={}
    } = props
    // console.log('Home', style)

    return(
        <div className={styles.home} style={style}>
            Home
        </div>
    )
}

export default Home