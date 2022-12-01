
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
                                        <div className="d-flex flex-row flex-md-row justify-content-between pt-4">
                                            <h4 className=" font-weight-bold mb-1">{experience.cargo} <small className="text-muted">({experience.subcargo})</small></h4>
                                            <div className=" ml-auto">{experience.empresa}</div>
                                        </div>
                                        <div className="">{experience.dataadmissao} - {experience.datademissao}</div>
                                    </div>
                                    <div >
                                        <p>{experience.descricaofuncao}</p>
                                        <h5 className=" font-weight-bold">Tecnologias utilizadas:</h5>
                                        <div className="d-lg-inline-flex">
                                            <ul className="d-flex list-inline inline-req">
                                                {
                                                    experience.tecnologias.map((tecnologia, i)=>{
                                                        return <li key={`${i}`} className="pr-1"><span className="badge rounded-pill bg-primary badge-pill">{tecnologia}</span></li>
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
                                                    <h4 className=" font-weight-bold mb-1">{course.nome}</h4>
                                                    <div className=" ml-auto">{course.empresa}</div>
                                                </div>
                                                <div className="">{course.datainicio} - {course.datatermino}</div>

                                                <div className=" ml-auto">{course.cargahoraria}</div>
                                            </div>
                                                <div className="resume-timeline-item-desc">
                                                    <p>{course.descricaofuncao}</p>												
                                            </div>

                                        </article>
                                    </div>
                                </div>    
                    })    
                }
            </section>
            {/* MINICURSOS */}
            <section className="text-left mb-5">
                <h3 className=" text-uppercase font-weight-bold pb-3 mb-3 mt-4">Minicourses</h3>
                {
                    shortCourses.map((course, i)=>{
                        return <div key={`${i}`} className="">
                                    <div className="position-relative">
                                        <article className=" position-relative">                                
                                            <div className=" mb-2">
                                                <div className="d-flex flex-row flex-md-row justify-content-between pt-4">
                                                    <h4 className=" font-weight-bold mb-1">{course.nome }</h4>
                                                    <div className=" ml-auto">{course.autor }</div>
                                                </div>
                                                <div className="">{course.datainicio} - {course.datatermino}</div>

                                                <div className=" ml-auto">{course.cargahoraria }</div>
                                            </div>
                                                <div className="resume-timeline-item-desc">
                                                    <p>{course.tecnologias}</p>												
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
                                                    <h4 className=" font-weight-bold mb-1">{extra.cargo}</h4>
                                                    <div className=" ml-auto">{extra.empresa}</div>
                                                </div>
                                                <div className="">{extra.dataadmissao} - {extra.datatermino}</div>

                                                <div className=" ml-auto">{extra.cargahoraria}</div>
                                            </div>
                                                <div className="resume-timeline-item-desc">
                                                    <p>{extra.descricaofuncao}</p>												
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