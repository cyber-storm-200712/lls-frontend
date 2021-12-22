const SectionSeparator = () => {
  return (
    <>
      <div className="wpb_wrapper">
        <div className="vc_empty_space" style={{height: '40px'}}>
          <span className="vc_empty_space_inner"></span>
        </div>
        <section className="video bg-animation p-90-60 itrqs">
          <div className="container">
            <div className="row">
              <div className="col-12 col-sm-7 align-self-center mb-30">
                <div className="section-title">
                  <p className="white-light bold small heading1">
                    Try on the touch
                  </p>
                  <h2 className="h1 white heading2">
                    <span className="thin">Watch</span> Video{" "}
                    <span className="thin">Presentation</span>
                  </h2>
                  <p className="white-light thin m-0 heading3">
                    App itself is fast, fluid and loads quickly.
                  </p>
                </div>
              </div>
              <div className="col-12 col-sm-5 align-self-center mb-30">
                <div className="play-frame play-rotate"></div>{" "}
                <a
                  href="https://www.youtube.com/watch?v=_SOkFEkZPmc"
                  data-lity=""
                >
                  <div className="play-button bg-color-1">
                    {" "}
                    <i className='fa fa-play'></i>
                  </div>{" "}
                </a>
              </div>
            </div>
          </div>
        </section>{" "}
      </div>
    </>
  );
};

export default SectionSeparator;
