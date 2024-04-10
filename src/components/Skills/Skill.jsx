import "./Skills.css"

export function Skills(){
    return(
        <section className="skills" id="skillsContent">
            <h2>Skills</h2>
            <div className="skillsContent" >
                
                <div className="softwareDevelop">
                    <h3>Develop Skills</h3>

                    <div className="skillsIcons">
                        <i className='bx bxl-javascript'></i>
                        <i className='bx bxl-java' ></i>
                        <i className='bx bxl-postgresql' ></i>
                        <i className='bx bxl-python' ></i>
                        <i className='bx bxl-react' ></i>
                    </div>
                </div>

                <div className="softwareDesign">
                    <h3>Graphic Design Skills</h3>
                    <div className="skillsDesign">
                        <img src="/img/icons/icon_photoshop.png" alt="" className="iconDesign" />

                        <img src="/img/icons/icon_illustrator.png" alt="" className="iconDesign" />

                        <img src="/img/icons/icon_after.png" alt="" className="iconDesign" />

                        

                        <img src="/img/icons/icon_figma.png" alt="" className="iconDesign figma" />



                    </div>
                </div>

            </div>
        </section>
    )
}


