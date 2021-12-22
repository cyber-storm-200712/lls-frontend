import Image from "next/image";
import Button from "./Button";
import DownloadLink from "./DownloadLink";
import './Button';

const AppSection = () => {
    return (
        <div className="flex flex-col container mx-auto px-4 self-center wire-frame">
            <div className="flex flex-row container mx-auto px-4 self-center wire-frame">
                <div className="basis-2/4 pre wire-frame">
                    <img className="jump" src={require(".//assets/programe.png")}/>
                </div>
                <div className="basis-2/4 wire-frame py-20">
                    <div className="flex col">
                        <h1 className="flex">Mistakes welcome</h1>
                        <p className="flex text-left text-lg">
                            Offering standalone value that is one of kind combination and with over 31,000 full lessons with a native AI tutor making it the corrections and our Native English teachers correcting mistakes and daily live lessons lectures and topic talks any members can join in on. 
                        </p>
                        <div className="flex items-center">
                            <Button title="Explore Now" className="flex items-center"/>
                            <DownloadLink title="Download Free Trial"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-row container mx-auto px-4 self-center wire-frame">
                <div className="basis-2/4 wire-frame py-20">
                    <h1 className="flex">Mistakes welcome</h1>
                    <p className="flex text-left text-xl">
                        Using active methodologies and hybrid learning, 
                        we provide an innovative digital teaching material experience. 
                        In this way, the teaching-learning process extends beyond the 
                        classroom, allowing your students to study 
                        whenever and wherever they like.
                    </p>
                    <div className="flex items-center">
                        <Button title="Explore Now" className="flex items-center"/>
                        <DownloadLink title="Download Free Trial"/>
                    </div>
                </div>
                <div className="basis-2/4 pre wire-frame">
                    <img className="jump" src={require(".//assets/dashboardandmobile.png")}/>
                </div>
            </div>
        </div>
    )
}

export default AppSection;