import {FaAngleRight} from "react-icons/fa";
interface PropType {
    title?: String;
    className?: any;
}

const DownloadLink = (props: PropType) => {
    return (
        <a className={`${props.className} gray link sm-white flex`} href="#">
            {props.title} <i className="fa fa-chevron-right"></i>
        </a>
    )
}

export default DownloadLink;