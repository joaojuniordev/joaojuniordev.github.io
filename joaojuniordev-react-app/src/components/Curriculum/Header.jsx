import './Curriculum.css'

import avatar from '../../assets/img/avatar.png'


const Header = (props)=>{
    const{        
        update={},
        user={},
        summary="..."
    } = props

    const domain = user.dominio

    return(
        <>
            <div className="curriculumHeader row ">
                <div className="curriculumAvatar col-md-2">
                    <img className="mt-4 mb-3" src={avatar} alt="avatar"/>
                </div>
                <div className="titulo col-md-10 p-3">
                        <div className="d-flex justify-content-between text-left ">
                            <div className="userInfo">
                                <h4 className="text-white text-uppercase">{ user.nome}</h4>
                                <div className="mb-2 text-uppercase">{ user.profissao} { user.nivel} </div>
                                <div className="mb-2 text-capitalize">{ user.stack} - { user.linguagens}</div>
                                <ul className="list-unstyled">
                                    <li>
                                        <a href="#">
                                            <span className="mdi mdi-email"> {user.email}</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://web.whatsapp.com/send?phone=+5585986122373&text=Ola%20dev,%20tudo%20bem?" target="_blank">
                                            <span className="mdi mdi-whatsapp"> {user.fone}</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href={domain.href} target="_blank">
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
                                                    <a href={`${href}${user}`} target="_blank">
                                                        <span className={icon}> {user}</span>
                                                    </a>
                                                </li>
                                    })     
                                }                                            
                                </ul>
                            </div>
                        </div>
                        <h4 className="curriculumUpdate text-uppercase">Versão: {update.version} | {update.date}</h4>
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