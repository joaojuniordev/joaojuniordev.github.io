import './Curriculum.css'


const Side = (props)=>{
    const {
        formations=[],
        skills=[],
        awards=[],
        languages=[],
        interests=[]
    } = props

    return(
        <div className="curriculumSide col-md-3">
            {/* FORMACAO */}
            <section className=" mb-5">
                <h3 className="text-uppercase font-weight-bold pb-3 mb-3 mt-4">Educação</h3>
                {
                    formations.map((formation, i)=>{
                        return <div key={`${i}`} className="r">
                            <ul className="list-unstyled">
                                <li className="mb-2">
                                    <h4 className=" font-weight-bold">{formation.descricao} </h4>
                                    <div className="text-uppercase">{formation.instituicao}</div>
                                    <div className="">({formation.datainicio} - {formation.datatermino})</div>
                                </li>
                            </ul>
                        </div>                                            
                    })    
                }
            </section>
            {/* HABILIDADES & FERRAMENTAS */}
            <section className=" mb-5">
                <h3 className="text-uppercase font-weight-bold pb-3 mb-3 mt-4">Habilidades & Ferramentas</h3>
            {
                skills.map((skill, i)=>{
                    return <div key={`${i}`} className="" >
                                <h4 className="r font-weight-bold">{skill.nome}</h4>
                                <ul className="list-unstyled mb-4">
                                {
                                    skill.tecnologias.map((tecnologia, i)=>{
                                        return  <li key={i} className="mb-2">
                                                    <div className="">{tecnologia.nome}</div>
                                                    <div className="progress ">                                                                    
                                                        <div className="progress-bar " role="progressbar" style={{backgroundColor:"#66cb8c",width:`${tecnologia.nivel}%`, ariaValueNow:"25", ariaValueMin:"0", ariaValueMax:"100"}}></div>
                                                    </div>
                                                </li>                                                            
                                    })
                                }
                                </ul>
                            </div>
                })    
            }
            </section>
            {/* PRÊMIOS */}
            <section className=" mb-5">
                <h3 className="text-uppercase font-weight-bold pb-3 mb-3 mt-4">Prêmios</h3>
                {
                    awards.map((award, i)=>{
                        return <div key={`${i}`} className="awards">
                                    <ul className="list-unstyled">
                                        <li className="list-inline row ">   
                                            <div className="col-md-1 m-1">
                                                <span className="mdi mdi-trophy"></span>
                                            </div>   
                                            <div className="col-md-10 m-1">                         
                                                <div className="">{award.nome}</div>
                                                <div className="">{award.descricao}</div>
                                                <div className="">({award.datainicio} - {award.datatermino})</div>			
                                            </div> 							
                                        </li>
                                    </ul>
                            </div>                                            
                    })    
                }
            </section>
            {/* IDIOMAS */}
            <section className=" mb-5">
                <h3 className="text-uppercase font-weight-bold pb-3 mb-3 mt-4">Idiomas</h3>
                    <ul className="list-unstyled ">
                {
                    languages.map((language, i)=>{
                        return <li key={i} className="mb-2"><span className=" font-weight-bold">{language.descricao}</span> <small className="text-muted font-weight-normal">({language.status})</small></li>
                    })    
                }
                    </ul>
            </section>
            {/* INTERESSES */}
            <section className=" mb-5">
                <h3 className="text-uppercase font-weight-bold pb-3 mb-3 mt-4">Interesses</h3>
                    <ul className="list-unstyled ">
                {
                    interests.map((interest, i)=>{
                        return <li key={i} className="mb-1">{interest.descricao}</li>
                    })    
                }
                    </ul>
            </section>
        </div>
    )
}

export default Side