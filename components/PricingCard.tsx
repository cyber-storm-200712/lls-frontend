import {FaDownload} from "react-icons/fa";

interface PropTypes {
    title?: String;
    description?: String;
    price?: String;
}

const PricingCard = (props:PropTypes) => {
  return (
    <div className="pricing p-55-60 coprq md:basis-1/3 sm:basis-2/4">
      <div className="pricing-table text-center">
        <div className="row">
          <div className="col-12">
            <p className="bold price-header plan_name">{props.title}</p>
          </div>
          <div className="col-12">
            <p className="light thin plan_desc">
              {props.description}
            </p>
          </div>
          <div className="col-12">
            <p className="bold price plan_price">
              <span className="text-red-600">{props.price}</span>
            </p>
          </div>
          <div className="col-12">
            <ul className="pricing-detail gray">
              <li>
                Only on iOS, macOS
                <br />
              </li>
              <li>
                Complex interface
                <br />
              </li>
              <li>
                Sleek design
                <br />
              </li>
              <li>Loads slowly</li>
            </ul>
            <ul className="pricing-detail gray disabled-features">
              <li className="mute">
                Limited download
                <br />
              </li>
              <li className="mute">Friendly support</li>
            </ul>
          </div>
          <div className="col-12">
            {" "}
            <a href="#" className="button bg-color-2">
              <i className="fa fa-download"></i>Download
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
