import { Routes, Route, useParams } from 'react-router-dom';


import ProjectsSection from './Components/ProjectsSection';

const ProjectDetails = () => {
    const { projectId } = useParams();
    return (
        <>
            {
                <h1>Project Details {projectId}</h1>
            }
        </>
    )

}

const Projects = () => {
    const { projectId } = useParams();
    console.log("projectId : ", projectId)
    return (
        <>
            <div className="flex flex-col justify-center items-center">
                <Routes>
                    <Route path="/" element={<ProjectsSection />} />
                    <Route path=":projectId" element={<ProjectDetails />} />
                </Routes>
            </div>
        </>
    )
}

export default Projects