import MyCard from '../../components/Card'

import styles from './Repo.module.css'
import { cardInfo } from '../../constants/pages/repo'


const Repo = (props) =>{
    const {
        cardItems = cardInfo,
        style={}
    } = props
    // console.log('Repo', style)
    const date = new Date().toLocaleDateString()

    return(
        <div className={styles.repo} style={style}>
            <div className={styles.header}>
                <h1>Repositórios</h1>
                <small>{date}</small>
            </div>
            <div className={styles.body}>
                <div className={styles.content}>
                    {
                        cardItems.map((info, i)=>{
                            return <div key={i} className={styles.repoCard}>
                                <MyCard cardInfo={info} />
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Repo