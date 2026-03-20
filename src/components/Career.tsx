import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My education <span>&</span>
          <br /> qualifications
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>S.S.C</h4>
                <h5>Fravashi Academy</h5>
              </div>
              <h3>2020</h3>
            </div>
            <p>
              Completed secondary education with a focus on foundational subjects, achieving a percentage of 94.40%.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>H.S.C</h4>
                <h5>H.P.T Arts And R.Y.K Science College</h5>
              </div>
              <h3>2022</h3>
            </div>
            <p>
              Completed higher secondary education in the Science stream, achieving a percentage of 89.67%.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.E E&TC</h4>
                <h5>Pune Institute Of Computer Technology</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Pursuing Bachelor of Engineering in Electronics and Telecommunication, currently maintaining a CGPA of 9.38. Active in technical clubs and projects.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
