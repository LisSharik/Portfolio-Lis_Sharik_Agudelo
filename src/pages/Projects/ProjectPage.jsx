import "./ProjectPage.css"
import { Menu } from "../../components/Menu/Menu"
import { Projects } from "../../components/Projects/Project"
import { Contacts } from "../../components/Contacts/Contacts"


export function ProjectPage(){
    return(
        <div className="myProjects">
            <Menu/>
            <Projects routeProject = "db/dbAllProjects.json" buton = {false}/>
            <Contacts/>
        </div>
    )
}