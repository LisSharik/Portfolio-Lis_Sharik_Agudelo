import "./Banner.css"

export function Banner(){
    return(
        <section className="banner" id="banner">
            <div className="text">
                <h1 id="name">Lis Sharik Agudelo Tobón</h1>
                <p>I'm a passionate learner with a strong background in software development and graphic design. I blend creativity with technical skills to deliver impactful solutions. Committed to innovation and excellence, I excel in dynamic environments.</p>

            </div>

            <div className="image">

                <img src="/img/banner_img.png" alt="image" />
            </div>

        </section>
    )
}