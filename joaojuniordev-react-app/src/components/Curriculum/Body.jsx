
const Body = (props) =>{
    const {
        experiences=[],
        courses=[],
        shortCourses=[],
        extras=[],
    } = props
    
    return(
        <div className="curriculumBody col-md-9">
            {/* EXPERIÊNCIA DE TRABALHO */}
            <section className="text-left mb-5">
                <h3 className=" text-uppercase font-weight-bold pb-3 mb-3 mt-4">Experiência de trabalho</h3>
                {
                    experiences.map((experience, i)=>{
                        return <div key={`${i}`} className="">
                            <div className="position-relative">
                                
                                <article className=" position-relative">                                
                                    <div className=" mb-2">
                                        <div className="d-flex flex-row justify-content-between pt-4">
                                            <h4 className="d-flex font-weight-bold mb-1">
                                                {experience.position}<small className="text-muted">({experience.subfunction})</small>
                                            </h4>
                                            <div className=" ml-auto">{experience.company}</div>
                                        </div>
                                        <div className="">{experience.admissionDate} - {experience.dismissalDate}</div>
                                    </div>
                                    <div >
                                        <p>{experience.description}</p>
                                        <h5 className=" font-weight-bold">Tecnologias utilizadas:</h5>
                                        <div className="d-lg-inline-flex">
                                            <ul className="d-flex flex-wrap list-inline inline-req">
                                                {
                                                    experience.technologies.map((technology, i)=>{
                                                        return <li key={`${i}`} className="pr-1"><span className="badge rounded-pill bg-primary badge-pill">{technology}</span></li>
                                                    })
                                                }
                                            </ul>
                                        </div>

                                    </div>

                                </article>
                            </div>
                        </div>    
                    })    
                }
            </section>
            {/* CURSOS EXTRAS */}
            <section className="text-left mb-5">
                <h3 className=" text-uppercase font-weight-bold pb-3 mb-3 mt-4">Cursos extras</h3>
                {
                    courses.map((course, i)=>{
                        return <div key={`${i}`} className="">
                                    <div className="position-relative">
                                        
                                        <article className=" position-relative">                                
                                            <div className=" mb-2">
                                                <div className="d-flex flex-row flex-md-row justify-content-between  pt-4">
                                                    <h4 className=" font-weight-bold mb-1">{course.name}</h4>
                                                    <div className=" ml-auto">{course.company}</div>
                                                </div>
                                                <div className="">{course.startDate} - {course.endDate}</div>

                                                <div className=" ml-auto">{course.workload}</div>
                                            </div>
                                                <div className="resume-timeline-item-desc">
                                                    <p>{course.description}</p>												
                                            </div>

                                        </article>
                                    </div>
                                </div>    
                    })    
                }
            </section>
            {/* MINICURSOS */}
            <section className="text-left mb-5">
                <h3 className=" text-uppercase font-weight-bold pb-3 mb-3 mt-4">Minicursos</h3>
                {
                    shortCourses.map((course, i)=>{
                        return <div key={`${i}`} className="">
                                    <div className="position-relative">
                                        <article className=" position-relative">                                
                                            <div className=" mb-2">
                                                <div className="d-flex flex-row flex-md-row justify-content-between pt-4">
                                                    <h4 className=" font-weight-bold mb-1">{course.name }</h4>
                                                    <div className=" ml-auto">{course.autor }</div>
                                                </div>
                                                <div className="">{course.startDate} - {course.endDate}</div>

                                                <div className=" ml-auto">{course.workload }</div>
                                            </div>
                                                <div className="resume-timeline-item-desc">
                                                    <p>{course.technologies}</p>												
                                            </div>
                                        </article>
                                    </div>
                                </div>    
                    })    
                }
            </section>
            {/* EXPERIÊNCIAS EXTRAS */}
            <section className="text-left mb-5">
                <h3 className=" text-uppercase font-weight-bold pb-3 mb-3 mt-4">Experiências extras</h3>
                {
                    extras.map((extra, i)=>{
                        return <div key={`${i}`} className="">
                                    <div className="position-relative">
                                        
                                        <article className=" position-relative">                                
                                            <div className=" mb-2">
                                                <div className="d-flex flex-row flex-md-row justify-content-between pt-4">
                                                    <h4 className=" font-weight-bold mb-1">{extra.position}</h4>
                                                    <div className=" ml-auto">{extra.company}</div>
                                                </div>
                                                <div className="">{extra.startDate} - {extra.endDate}</div>

                                                <div className=" ml-auto">{extra.workload}</div>
                                            </div>
                                                <div className="resume-timeline-item-desc">
                                                    <p>{extra.description}</p>												
                                            </div>

                                        </article>
                                    </div>
                                </div>    
                    })    
                }
            </section>
        </div>
    )
}

export default Body