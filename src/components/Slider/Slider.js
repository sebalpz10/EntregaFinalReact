import Carousel from 'react-bootstrap/Carousel';

function Slider(props) {

    const { image01, image02, image03, image04 } = props

    return (
        <Carousel indicators={false} interval={null}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={image01}
                    alt="First image"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={image02}
                    alt="Second image"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={image03}
                    alt="Third image"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={image04}
                    alt="Fourth image"
                />
            </Carousel.Item>
        </Carousel>
    );
}

export default Slider;