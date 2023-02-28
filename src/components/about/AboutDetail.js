function AboutDetail({ img, title, description }) {

    return (<>
        <div className='about'>
            <div className="about-content">
                <h1 className="about-title">{title}</h1>
                <img className="about-title" src={img}></img>
                <p className="about-description">{description}</p>
            </div>
        </div>
    </>
    )
}

export default AboutDetail