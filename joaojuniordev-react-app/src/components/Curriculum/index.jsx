import './Curriculum.css'
import Header from './Header'
import Body   from './Body'
import Side from './Side'


const MyCurriculum = (props) => {
    const {
        data = {},
    } = props
    // console.log('MyCurriculum', )

    const {
        update={},
        user={},
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
            <div className="curriculum-singlepage">
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