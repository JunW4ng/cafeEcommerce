import photo01 from "../../images/carousel01.png"
import photo02 from "../../images/carousel02.png"
import photo03 from "../../images/carousel03.png"
import "../carousel/Carousel.css"

export const Carousel = () => {
    return (
        <div id="carouselExampleIndicators" className="carousel slide container" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner ">
                <div className="carousel-item active">
                    <img src={photo01} className="carousel-img d-block" alt="fotoCarousel01"></img>
                </div>
                <div className="carousel-item">
                    <img src={photo02} className="carousel-img d-block" alt="fotoCarousel01"></img>
                </div>
                <div className="carousel-item">
                    <img src={photo03} className="carousel-img d-block" alt="fotoCarousel01"></img>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}