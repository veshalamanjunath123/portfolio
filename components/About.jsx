import { profile } from "../data/profile";

export default function About() {
  return (
    <section id="about">
      <div className="about-inline-services__head">
        <span className="about-inline-services__label">About</span>
        <span className="about-inline-services__label">{profile.location}</span>
      </div>
      <p className="about-lead">{profile.summary}</p>

      <div className="about-inline-services__head">
        <span className="about-inline-services__label">Skills</span>
      </div>
      <div className="about-inline-services__grid">
        {profile.skills.map(([t, d]) => (
          <div key={t} className="about-inline-services__item">
            <h4>{t}</h4>
            <p>{d}</p>
          </div>
        ))}
      </div>

      <div className="about-inline-services__head" style={{ marginTop: "4vw" }}>
        <span className="about-inline-services__label">Experience</span>
      </div>
      <div className="about-inline-services__grid">
        {profile.experience.map(([t, when, d]) => (
          <div key={t} className="about-inline-services__item">
            <h4>{t}</h4>
            <p style={{ opacity: 0.6 }}>{when}</p>
            <p>{d}</p>
          </div>
        ))}
      </div>

      {profile.education && (
        <>
          <div className="about-inline-services__head" style={{ marginTop: "4vw" }}>
            <span className="about-inline-services__label">Education</span>
          </div>
          <div className="about-inline-services__grid">
            {profile.education.map(([deg, inst, when]) => (
              <div key={deg} className="about-inline-services__item">
                <h4>{deg}</h4>
                <p style={{ opacity: 0.6 }}>{when}</p>
                <p>{inst}</p>
              </div>
            ))}
          </div>
        </>
      )}

      {profile.certifications && (
        <>
          <div className="about-inline-services__head" style={{ marginTop: "4vw" }}>
            <span className="about-inline-services__label">Certifications</span>
          </div>
          <div className="about-inline-services__grid">
            {profile.certifications.map(([cert, issuer]) => (
              <div key={cert} className="about-inline-services__item">
                <h4>{cert}</h4>
                <p style={{ opacity: 0.7 }}>{issuer}</p>
              </div>
            ))}
          </div>
        </>
      )}
    </section>
  );
}
