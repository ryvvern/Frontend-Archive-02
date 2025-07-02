export default function MainContent() {
    return (
    <div className="card-content">
        <div className="intro">
            <h3 className="name">Corlys Velaryon</h3>
            <span className="designation">Full-Stack Developer</span>
            <span className="portfolio">velaryon.website</span>
        </div>
        <div className="btn-container">
            <button className="email-btn"><i class="fa-solid fa-envelope"></i>Email</button>
        </div>
        <div className="about-info">
            <div className="about">
                <h4>About</h4>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione consectetur deleniti sit necessitatibus tempora voluptatibus ipsa minima nisi quibusdam? Quas numquam atque error voluptatibus</p>
            </div>
            
            <div className="interests">
                <h4>Interests</h4>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius aliquid quae quam dolor nesciunt perspiciatis magnam minus voluptatum officiis.</p>
            </div>
            
        </div>
    </div>
    )
}