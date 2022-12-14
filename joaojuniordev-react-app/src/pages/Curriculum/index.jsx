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
            <MyCurriculum data={ resume.update?.online ? resume:data } />
        </div>
    )
}

const getCurriculum = (id, setResume) =>{
    axios.get(`${CURRICULUM.URI}/${id}`)
        .then(respAx=>respAx.data)
        .then(respAPI=>respAPI.data)
        .then(curriculum=>{ 
            setResume({...curriculum, update:{ ...curriculum.update, online:true } }) 
        })
        .catch(e=>{
            setResume({ update:{ online:false } }) 
            console.log('APIError ### ', e.message)
        })
}

export default Curriculum