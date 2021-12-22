import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import PricingCard from "./PricingCard";

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
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const TestSection = () => {
  return (
    <div className="container py-20 wire-frame">
      <div className="flex col wire-frame">
        <h3 className="flex">Then we want to go to what next like a step by step 
        I need to make here a step by step. Like what you can do next so first step </h3>
        <div className="flex py-20">
          <Carousel
            responsive={responsive}
            className="py-2 wire-frame"
            swipeable={true}
            draggable={true}
            ssr={true}
            infinite={true}
          > 
            <div className="shadow-md px-5 py-5 h-100 text-sm rounded-lg">Step 1: 1Sit placement exam.</div>
            <div className="shadow-md px-5 py-5 h-100 text-sm rounded-lg">Step 2: Join our plans.</div>
            <div className="shadow-md px-5 py-5 h-100 text-sm rounded-lg">Step 3: Get results and added to your level assignment and group teacher will contact you soon.</div>
            <div className="shadow-md px-5 py-5 h-100 text-sm rounded-lg">Step 4: Fill in the questionnaire about yourself. Your goals. And where you want to be and why. This information is important for you to tell someone to make yourself accountable.</div>
            <div className="shadow-md px-5 py-5 h-100 text-sm rounded-lg">Step 5: Begin the journey and follow the lesson structure and you will be on your way.</div>
          </Carousel>
        </div>
        <div className="flex">
        <Carousel
            responsive={responsive}
            className="py-5 wire-frame"
            swipeable={true}
            draggable={true}
            ssr={true}
            infinite={true}
            autoPlay
            arrows={false}
            itemClass="self-center"
            transitionDuration={0.5}
          >
            <img className="self-center mg-auto" src={require('.//assets/brand-1.png')} width={100} alt="brand"/>
            <img className="self-center mg-auto" src={require('.//assets/brand-2.png')} width={100} alt="brand"/>
            <img className="self-center mg-auto" src={require('.//assets/brand-3.png')} width={100} alt="brand"/>
            <img className="self-center mg-auto" src={require('.//assets/brand-4.png')} width={100} alt="brand"/>
            <img className="self-center mg-auto" src={require('.//assets/brand-5.png')} width={100} alt="brand"/>
            <img className="self-center mg-auto" src={require('.//assets/brand-6.png')} width={100} alt="brand"/>
          </Carousel>
        </div>
        <h2 className="font-normal">Flexible <span className="font-semibold">Pricing</span> Plans</h2>
        <div className="flex">
            <PricingCard title={"Student"} description={"World best Free App store fore your Android mobile"} price={"free"}/>
            <PricingCard title={"Kids"} description={"World best Free App store fore your Android mobile"} price={"free"}/>
            <PricingCard title={"Corporate"} description={"World best Free App store fore your Android mobile"} price={"free"}/>
        </div>
      </div>
    </div>
  );
};

export default TestSection;
