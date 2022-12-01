import { Link } from 'react-router-dom'

import './Curriculum.css'

const data = require(`../../data/componentTest/curriculos.json`)


const Curriculum = (props) => {
    const {
        curriculo = data[0],
    } = props
    console.log('Curriculum', )

    const {
        update=[],
        usuario={},
        formacoes=[],
        experiencias=[],
        premios=[],
        extras=[],
        cursos=[],
        minicursos=[],
        habilidades=[],
        idiomas=[],
        interesses=[],

    } = curriculo
    

    return (
        <main role="main" className="mainCurriculo container mx-auto masthead text-white" >
            <div className="curriculo-singlepage">
                <div className="curriculo flex-column">
                    <div className="container mx-auto">
                        <div className="curriculo-header row ">
                            <div className="container-img col-md-2">
                                <img className="mt-4 mb-3" src="img/avatar.png" alt=""/>
                            </div>
                            <div className="titulo col-md-10 p-3">
                                <div className="row text-left ">
                                    <div className="col-md-7 m-2">
                                        <h4 className="text-white text-uppercase">{ usuario.nome}</h4>
                                        <div className="mb-2">{ usuario.profissao} { usuario.nivel} </div>
                                        <div className="mb-2">{ usuario.stack} - { usuario.linguagens}</div>
                                        <ul className="list-unstyled">
                                            <li><Link to="#"><span className="mdi mdi-email"></span> {usuario.email}</Link></li>
                                            <li><Link to="#"><span className="mdi mdi-cellphone"></span> {usuario.telefone}</Link></li>
                                        </ul>
                                    </div>
                                    <div className="redesocial col-md-4 m-3">
                                        <ul className=" list-unstyled">
                                            <li className="mb-3">
                                                <Link to="#" target="_blank">
                                                    <span className="mdi mdi-linkedin">{usuario.redesocial.linkedin}</span>
                                                </Link>
                                            </li>
                                            <li className="mb-3">
                                                <Link to="#" target="_blank">
                                                    <span className="mdi mdi-github">{usuario.redesocial.github}</span>
                                                </Link>
                                            </li>
                                            <li className="mb-3">
                                                <Link to="#" target="_blank">
                                                    <span className="mdi mdi-twitter">{usuario.redesocial.twitter}</span>
                                                </Link>
                                            </li>
                                            <li className="mb-3">
                                                <Link to="/" target="_blank">
                                                    <span className="mdi mdi-sphere"> {usuario.redesocial.site}</span>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <h4 className="curriculo-update text-uppercase">Versão: {update.version} | {update.date}</h4>

                                </div>
                            </div>
                        </div>
                        <div className="curriculo-resumo row">
                            <div className="p-3 mt-4 mb-1">
                                <h2 className="text-uppercase font-weight-bold ">Resumo da Carreira</h2>
                                <p className="text-left ml-2">
                                    {curriculo.resumo}
                                </p>
                            </div>
                        </div>
                        
                        <article className="row p-1">
                            {/* CORPO */}
                            <div className="curriculo-col-corpo col-md-9">
                                {/* EXPERIÊNCIA DE TRABALHO */}
                                <section className="text-left mb-5">
                                    <h3 className=" text-uppercase font-weight-bold pb-3 mb-3 mt-4">Experiência de trabalho</h3>
                                    {
                                        experiencias.map((experiencia, i)=>{
                                            return <div key={`${i}`} className="">
                                                <div className="position-relative">
                                                    
                                                    <article className=" position-relative">                                
                                                        <div className=" mb-2">
                                                            <div className="d-flex flex-row flex-md-row justify-content-between pt-4">
                                                                <h4 className=" font-weight-bold mb-1">{experiencia.cargo} <small className="text-muted">({experiencia.subcargo})</small></h4>
                                                                <div className=" ml-auto">{experiencia.empresa}</div>
                                                            </div>
                                                            <div className="">{experiencia.dataadmissao} - {experiencia.datademissao}</div>
                                                        </div>
                                                        <div >
                                                            <p>{experiencia.descricaofuncao}</p>
                                                            <h5 className=" font-weight-bold">Tecnologias utilizadas:</h5>
                                                            <div className="d-lg-inline-flex">
                                                                <ul className="d-flex list-inline inline-req">
                                                                    {
                                                                        experiencia.tecnologias.map((tecnologia, i)=>{
                                                                            return <li key={`${i}`} className="pr-1"><span className="badge badge-primary badge-pill">{tecnologia}</span></li>
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
                                        cursos.map((curso, i)=>{
                                            return <div key={`${i}`} className="">
                                                        <div className="position-relative">
                                                            
                                                            <article className=" position-relative">                                
                                                                <div className=" mb-2">
                                                                    <div className="d-flex flex-row flex-md-row justify-content-between  pt-4">
                                                                        <h4 className=" font-weight-bold mb-1">{curso.nome}</h4>
                                                                        <div className=" ml-auto">{curso.empresa}</div>
                                                                    </div>
                                                                    <div className="">{curso.datainicio} - {curso.datatermino}</div>

                                                                    <div className=" ml-auto">{curso.cargahoraria}</div>
                                                                </div>
                                                                    <div className="resume-timeline-item-desc">
                                                                        <p>{curso.descricaofuncao}</p>												
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
                                        minicursos.map((curso, i)=>{
                                            return <div key={`${i}`} className="">
                                                        <div className="position-relative">
                                                            <article className=" position-relative">                                
                                                                <div className=" mb-2">
                                                                    <div className="d-flex flex-row flex-md-row justify-content-between pt-4">
                                                                        <h4 className=" font-weight-bold mb-1">{curso.nome }</h4>
                                                                        <div className=" ml-auto">{curso.autor }</div>
                                                                    </div>
                                                                    <div className="">{curso.datainicio} - {curso.datatermino}</div>

                                                                    <div className=" ml-auto">{curso.cargahoraria }</div>
                                                                </div>
                                                                    <div className="resume-timeline-item-desc">
                                                                        <p>{curso.tecnologias}</p>												
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
                          
                            {/* LATERAL */}
                            <div className="curriculo-col-lateral col-md-3">
                                {/* FORMACAO */}
                                <section className=" mb-5">
                                    <h3 className="text-uppercase font-weight-bold pb-3 mb-3 mt-4">Educação</h3>
                                    {
                                        formacoes.map((formacao, i)=>{
                                            return <div key={`${i}`} className="r">
                                                <ul className="list-unstyled">
                                                    <li className="mb-2">
                                                        <h4 className=" font-weight-bold">{formacao.descricao} </h4>
                                                        <div className="text-uppercase">{formacao.instituicao}</div>
                                                        <div className="">({formacao.datainicio} - {formacao.datatermino})</div>
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
                                    habilidades.map((habilidade, i)=>{
                                        return <div key={`${i}`} className="" >
                                                    <h4 className="r font-weight-bold">{habilidade.nome}</h4>
                                                    <ul className="list-unstyled mb-4">
                                                    {
                                                        habilidade.tecnologias.map((tecnologia, i)=>{
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
                                        premios.map((premio, i)=>{
                                            return <div key={`${i}`} className="premios">
                                                        <ul className="list-unstyled">
                                                            <li className="list-inline row ">   
                                                                <div className="col-md-1 m-1">
                                                                    <span className="mdi mdi-trophy"></span>
                                                                </div>   
                                                                <div className="col-md-10 m-1">                         
                                                                    <div className="">{premio.nome}</div>
                                                                    <div className="">{premio.descricao}</div>
                                                                    <div className="">({premio.datainicio} - {premio.datatermino})</div>			
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
                                        idiomas.map((idioma, i)=>{
                                            return <li key={i} className="mb-2"><span className=" font-weight-bold">{idioma.descricao}</span> <small className="text-muted font-weight-normal">({idioma.status})</small></li>
                                        })    
                                    }
                                        </ul>
                                </section>

                                {/* INTERESSES */}
                                <section className=" mb-5">
                                    <h3 className="text-uppercase font-weight-bold pb-3 mb-3 mt-4">Interesses</h3>
                                        <ul className="list-unstyled ">
                                    {
                                        interesses.map((interesse, i)=>{
                                            return <li key={i} className="mb-1">{interesse.descricao}</li>
                                        })    
                                    }
                                        </ul>
                                </section>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Curriculum