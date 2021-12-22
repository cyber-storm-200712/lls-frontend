import Image from "next/image";
import { FaAngleDoubleDown } from "react-icons/fa";
import iphone from "/components/assets/iphone.png";
import samsung from "/components/assets/samsung.jpg";
export default function Header() {
  return (
    <div className="flex container-wrapper col items-stretch">
      <div className="flex container-wrapper main-header">
        <div className="flex container row header-row self-auto mg-auto bg-[url(/components/assets/background.png)]">
          <div className="flex col col-sm-12 col-md-6 align-self-center main-title header-row-col wire-frame">
            <h1 className="flex heading2 sm-white">
              <span className="thin">
                Learn right Laugh more Speak fluently
              </span>
            </h1>{" "}
            <p className="text-xl flex">
              The only English tutoring program with all materials (31,000
              lessons for adults and 6,000 lessons for children) internationally
              recognized by the European Framework of Reference (CEFR) for
              levels a1 - c2
            </p>
            <a href="#" className="flex">
              <div className="button bg-color-1">Explore Now</div>
            </a>{" "}
            <a className="gray link sm-white flex" href="#">
              Download free trial <i className="fas fa-chevron-right"></i>
            </a>
            <div className="header-tooltip">
              <FaAngleDoubleDown className="bounce"/>
              <p className="light thin small sm-white heading3">
                Scroll Down
                <br /> To Learn More
              </p>
            </div>
          </div>
          <div className="col-12 col-md-6 align-self-center header-phone wire-frame">
            <img className="lg:header-iphone jump" alt="iphone" src={iphone}/>
          </div>
        </div>
      </div>
      <div className="flex row header-row wide-container app-features">
        <div className="flex app-features-iphone wire-frame">
          <Image
            className="black-iphone"
            src={samsung}
            width="280px"
            height="450px"
          />
        </div>
        <div className="flex col app-features-detail wire-frame">
          <div className="flex app-features-title">
            <h1 className="flex heading2 sm-white">
              <span className="thin">Ket features</span>
            </h1>
          </div>
          <div className="flex col app-features-list">
            <div className="flex app-features-row">
              <div className="flex app-features-col wire-frame">
                <div className="flex"></div>
                <div className="flex col">
                  <div className="flex">
                    <h4>Unlimited Lessons per month</h4>
                  </div>
                  <div className="flex">
                    English Made Easy is the clear, complete and up to date
                    English learning tool for anyone who wants to learn.
                  </div>
                </div>
              </div>
              <div className="flex app-features-col wire-frame">
                <div className="flex"></div>
                <div className="flex col">
                  <div className="flex">
                    <h4>Learn to speak English fluently</h4>
                  </div>
                  <div className="flex">
                    With our tutor not only will you consistently get feedback
                    you will be learning correct inline with CEFR standards.
                  </div>
                </div>
              </div>
            </div>
            <div className="flex app-features-row">
              <div className="flex app-features-col wire-frame">
                <div className="flex"></div>
                <div className="flex col">
                  <div className="flex">
                    <h4>Testing A1 - C1</h4>
                  </div>
                  <div className="flex">
                    Feeling of assurance knowing the academic materials are
                    built inline with CEFR. Each level a test is given before
                    moving up to the next level. A1 B1 b2 C1 c2
                  </div>
                </div>
              </div>
              <div className="flex app-features-col wire-frame">
                <div className="flex"></div>
                <div className="flex col">
                  <div className="flex">
                    <h4>Talk when you feel like it </h4>
                  </div>
                  <div className="flex">
                    We approach learning with a smile and a laugh. Our internal
                    groups allow students to join in daily talks with native
                    teachers on topics related to IELTS testing for live
                    practice opportunity's
                  </div>
                </div>
              </div>
            </div>
            <div className="flex app-features-row">
              <div className="flex app-features-col wire-frame">
                <div className="flex"></div>
                <div className="flex col">
                  <div className="flex">
                    <h4>Group live lessons </h4>
                  </div>
                  <div className="flex">
                    Through the conversational clubs already solid foundation
                    since 2018 we have taken online convo clubs to a casual
                    “speak when you feel like it” Learning will only happen this
                    way. live topic talks and lesson lectures to join daily for
                    that live practice
                  </div>
                </div>
              </div>
              <div className="flex app-features-col wire-frame">
                <div className="flex"></div>
                <div className="flex col">
                  <div className="flex">
                    <h4>more then pronunciation </h4>
                  </div>
                  <div className="flex">
                    Passing IELTS with a good score is important so you need to
                    learn correct for the testing or you will encounter methods
                    or structures unfamiliar to you leading to bad marks.
                  </div>
                </div>
              </div>
            </div>
            <div className="flex app-feature-row">
              <div className="flex app-features-col wire-frame">
                <div className="flex"></div>
                <div className="flex col">
                  <div className="flex">
                    <h4>Natives what! </h4>
                  </div>
                  <div className="flex">
                    We are native teachers our AI tutor is Native American
                    whilst learning all aspects of grammar. Our live topic talks
                    and lessons lectures are only native Teachers coming from
                    their classrooms via video and audio.
                  </div>
                </div>
              </div>
              <div className="flex app-features-col wire-frame">
                <div className="flex"></div>
                <div className="flex col">
                  <div className="flex">
                    <h4>Mistakes welcome </h4>
                  </div>
                  <div className="flex">
                    We have a different approach where mistakes are welcomed
                    sometimes funny but we all make mistakes and we celebrate
                    this mistake it is one less mistake you will encourter on
                    your journey to fluency
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
