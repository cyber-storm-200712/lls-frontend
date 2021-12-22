import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import iphone from "/components/assets/testresult.png";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const ScreenshotSection = () => {
  return (
    <div className="container py-20 wire-frame">
      <div className="flex col wire-frame">
        <h1 className="flex">A snapshot from the classroom </h1>
        <div className="flex py-20">
          <Carousel
            responsive={responsive}
            className="wire-frame"
            swipeable={true}
            draggable={true}
            ssr={true}
            infinite={true}
          >
            <img src={iphone}/>
            <img src={iphone}/>
            <img src={iphone}/>
            <img src={iphone}/>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default ScreenshotSection;
