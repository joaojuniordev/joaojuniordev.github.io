import styles from './Home.module.css'
import MyCarousel from '../../components/Carousel'
import AlertDismiss from '../../components/Alert/Dismiss'
import MyTable from '../../components/Table'


const Home = (props) =>{
    const {
        style={}
    } = props
    // console.log('Home', style)
    const date = new Date().toLocaleDateString()

    return(
        <div className={styles.home} style={style}>
            <div className={styles.header}>
                <h1>Home</h1>
                <small>{date}</small>
            </div>
            <div className={styles.body}>
                <MyCarousel />
                <AlertDismiss message={"Tabela de exemplo."} style={{margin:"20px 0 0 0"}}/>
                <MyTable style={{margin:"40px"}}/>
            </div>
        </div>
    )
}

export default Home