import './Curriculum.css'
import {WHATSAPP} from '../../config'
import avatar from '../../assets/img/avatar.png'


const Header = (props)=>{
    const{       
        update={},
        user={},
        summary=""
   } = props
//    console.log("Header ...", update)
    const uri_zap = `${WHATSAPP.URI}+5585911112222&text=Olá dev, tudo bem???`

    return(
        <>
            <div className="curriculumHeader row">
                <div className="curriculumAvatar col-lg-2 col-md-3 col-sm-4">
                    <img className="mt-4 mb-3" src={avatar} alt="avatar"/>
                </div>
                <div className="curriculumInfo col-lg-10 col-md-9 col-sm-8 p-3">
                    <div className="d-flex justify-content-between text-left ">
                        <div className="userInfo">
                            <h4 className="text-white text-uppercase">{user.name || "Nome sobrenome"}</h4>
                            <div className="mb-2 text-uppercase">{user?.profession || "Profissão"} {user?.nivel || "jr"} </div>
                            <div className="mb-2 text-capitalize">{user?.stack || "Fullstack"} - {user?.programmingLanguages || "Liguagens de programação 1, 2 e 3"}</div>
                            <ul className="list-unstyled">
                                <li>
                                    <a href="/">
                                        <span className="curriculumIcons mdi mdi-email"> {user?.email || "my@email.com"}</span>
                                    </a>
                                </li>
                                <li>
                                    <a href={uri_zap} target="_blank" rel="noreferrer">
                                        <span className="curriculumIcons mdi mdi-whatsapp"> {user?.phone || "+55 (011) 0 0000-0000"}</span>
                                    </a>
                                </li>
                                <li>
                                    <a href={user?.domain.href||"#"} target="_blank" rel="noreferrer">
                                        <span className={`curriculumIcons ${user?.domain.icon || "mdi mdi-sphere"}`}> {user?.domain.user || "site.com"}</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="redesocial">
                            <ul className="list-unstyled">
                            {
                                user.redesocial.map(({icon, href, user}, i)=>{
                                    return  <li key={i} className="mb-2">
                                                <a href={`${href}${user}`} target="_blank" rel="noreferrer">
                                                    <span className={`curriculumIcons ${icon}`}> {user}</span>
                                                </a>
                                            </li>
                               })     
                           }                                            
                            </ul>
                        </div>
                    </div>
                    <div className={"curriculumUpdate"}>
                        <h5 className="curriculumVersion">
                            <mark>v{update?.version || "0.1"}</mark> | <span>{update?.date||"25/12/2022"}</span>
                            <span className={`curriculumOnline mdi mdi-cloud`} 
                            style={{
                                color: update?.online ? "var(--online)":"var(--offline-light)",
                                textDecoration: update?.online ? "none":"line-through"
                            }} >
                                { " API"}
                            </span>
                        </h5>
                    </div>
                </div>
            </div>
            <div className="curriculumSummary row">
                <div className="p-3 mt-4 mb-1">
                    <h2 className="text-uppercase font-weight-bold ">Resumo da Carreira</h2>
                    <p className="text-left ml-2">
                        {summary || "..."}
                    </p>
                </div>
            </div>
        </>
    )
}

export default Header