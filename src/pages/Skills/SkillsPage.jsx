import "./SkillsPage.css";
import { Menu } from "../../components/Menu/Menu";
import { Contacts } from "../../components/Contacts/Contacts";
import { Skills } from "../../components/Skills/Skill";

export function SkillsPage(){
    return(
        <div className="mySkills">
            <Menu/>
            <Skills/>
            <Contacts/>
        </div>
    )
}


