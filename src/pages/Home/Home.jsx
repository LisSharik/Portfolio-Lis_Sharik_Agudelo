import "./Home.css"
import { Banner } from "../../components/Banner/Banner";
import { Skills } from "../../components/Skills/Skill";
import { Projects } from "../../components/Projects/Project";
import { Contacts } from "../../components/Contacts/Contacts";
import { Menu } from "../../components/Menu/Menu";

export function Home(){
    return(
        <div className="home">
            <Menu/>
            <Banner/>
            <Skills/>
            <Projects routeProject = "db/bestProjects.json" buton = {true}/>
            <Contacts/>
        </div>
    )
}


