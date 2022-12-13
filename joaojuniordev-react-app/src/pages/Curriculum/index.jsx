import { useEffect, useState } from 'react'
import axios from 'axios'

import styles from './Curriculum.module.css'

import { CURRICULUM } from '../../config'
import MyCurriculum from '../../components/Curriculum'

const staticResumes = require(`../../data/componentTest/curriculums.json`)
 

const Curriculum = (props) => {
    const {
        id="0",
        data  = staticResumes[0],
        style = {}
    } = props
    
    const [resume, setResume] = useState({})

    useEffect(() =>{
        getCurriculum(id,setResume)
    },[id, setResume])
    // console.log('Curriculum ... ', `${CURRICULUM.URI}/${id}`, resume)

    return (
        <div className={styles.curriculumPage} style={style}>
            <h1> {"Curriculum Vitae"} </h1>
            <span className={`${styles.backStatus} mdi mdi-server`} 
            style={{color: resume.online ? "var(--online)":"var(--offline)"}}>
                { resume.online ? " online":" offline"}
            </span>
            <MyCurriculum data={ resume.backOnline ? resume : data} />
        </div>
    )
}

const getCurriculum = (id, setResume) =>{
    axios.get(`${CURRICULUM.URI}/${id}`)
        .then(respAx=>respAx.data)
        .then(respAPI=>respAPI.data)
        .then(curriculum=>{ 
            setResume({online:true , ...curriculum }) 
        })
        .catch(e=>{
            setResume({online:false, }) 
            console.log('APIError ### ', e.message)
        })
}

export default Curriculum