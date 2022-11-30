import { Link } from 'react-router-dom'


const MainMenu = (props) =>{
    const { 
        menu=[], 
        onClose=undefined, 
    } = props
    // console.log('MainMenu', onClose)

    return(
        <>{
            menu.map((item, i)=>(
                <Link key={`item-${i}`} 
                to={item.src}                 
                onClick={onClose} 
                // target={item.target}
                style={{display:'flex', alignItems:'center', height:"100%"}}
                >
                    <span className={item.icon}> {item.description} </span>
                </Link>
            ))
        }</>
    )
}

export default MainMenu