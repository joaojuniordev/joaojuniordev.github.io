import styles from './Curriculum.module.css'

import MyCurriculum from '../../components/Curriculum'

const data = require(`../../data/componentTest/curriculos.json`)


const Curriculum = (props) => {
    const {
        curriculum = data[0],
    } = props
    // console.log('Curriculum', )

    return (
        <div className={styles.curriculumPage}>
            <h1>Curriculum Vitae</h1>
            <MyCurriculum data={curriculum} />
        </div>
    )
}

export default Curriculum