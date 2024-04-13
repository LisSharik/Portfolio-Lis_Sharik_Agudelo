import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { ProjectPage } from "../pages/Projects/ProjectPage";
import { SkillsPage } from "../pages/Skills/SkillsPage";

export function MyRoutes(){
    return(
        <Router>
            <Routes>
                <Route exact path="/" element ={<Home/>}/>
                <Route exact path="/projects" element= {<ProjectPage/>}/>
                <Route exact path="/skills" element= {<SkillsPage/>}/>
            </Routes>
        </Router>
    )
}
