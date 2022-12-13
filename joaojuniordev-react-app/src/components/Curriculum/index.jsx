import './Curriculum.css'
import Header from './Header'
import Body   from './Body'
import Side from './Side'


const MyCurriculum = (props) => {
    const {
        data = {},
    } = props
    // console.log('MyCurriculum ... ', data )

    const {
        update={"version":"1.0", "date":"30-11-2022"},
        user={
            domain:{},
            redesocial:[{"icon":"mdi mdi-linkedin" , "href":"#" , "user":"/username"},]
        },
        summary="",
        formations=[],
        experiences=[],
        awards=[],
        extras=[],
        courses=[],
        shortCourses=[],
        skills=[],
        languages=[],
        interests=[],
    } = data

    return (
        <div className="curriculumBox container mx-auto text-white" >
            <div className="curriculumSinglepage">
                <div className="curriculum flex-column">
                    <div className="container mx-auto">
                        {/* CABECALHO */}
                        <Header 
                        update={update} 
                        user={user} 
                        summary={summary}                           
                        />
                        
                        <article className="row p-1">
                            {/* CORPO */}
                            <Body 
                            experiences={experiences}
                            courses={courses}
                            shortCourses={shortCourses}
                            extras={extras}    
                            />                          
                            {/* LATERAL */}
                            <Side
                            formations={formations}
                            skills={skills}
                            awards={awards}
                            languages={languages}
                            interests={interests}        
                            />
                        </article>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyCurriculum