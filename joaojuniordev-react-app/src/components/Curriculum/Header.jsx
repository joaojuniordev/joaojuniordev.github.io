import './Curriculum.css'
import { WHATSAPP } from '../../config'
import avatar from '../../assets/img/avatar.png'


const Header = (props)=>{
    const{        
        update={},
        user={},
        summary="..."
    } = props

    const domain  = user.dominio
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
                            <h4 className="text-white text-uppercase">{ user.nome}</h4>
                            <div className="mb-2 text-uppercase">{ user.profissao} { user.nivel} </div>
                            <div className="mb-2 text-capitalize">{ user.stack} - { user.linguagens}</div>
                            <ul className="list-unstyled">
                                <li>
                                    <a href="/">
                                        <span className="mdi mdi-email"> {user.email}</span>
                                    </a>
                                </li>
                                <li>
                                    <a href={uri_zap} target="_blank" rel="noreferrer">
                                        <span className="mdi mdi-whatsapp"> {user.fone}</span>
                                    </a>
                                </li>
                                <li>
                                    <a href={domain.href} target="_blank" rel="noreferrer">
                                        <span className={domain.icon}> {domain.user}</span>
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
                                                    <span className={`curriculumIcons ${icon}`}><small>{user}</small></span>
                                                </a>
                                            </li>
                                })     
                            }                                            
                            </ul>
                        </div>
                    </div>
                    <h5 className="curriculumUpdate">v{update.version} | {update.date}</h5>
                </div>
            </div>
            <div className="curriculumSummary row">
                <div className="p-3 mt-4 mb-1">
                    <h2 className="text-uppercase font-weight-bold ">Resumo da Carreira</h2>
                    <p className="text-left ml-2">
                        {summary}
                    </p>
                </div>
            </div>
        </>
    )
}

export default Header