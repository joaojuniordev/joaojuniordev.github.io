import styles from './Repo.module.css'

const Repo = (props) =>{
    const {
        style={}
    } = props
    console.log('Repo', style)

    return(
        <div className={styles.Repo}>
            Repo
        </div>
    )
}

export default Repo