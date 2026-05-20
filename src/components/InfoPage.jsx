import "./InfoPage.css";

function InfoPage({ title, sections }) {
  return (
    <div className="info">
      <div className="info__inner">
        <h1 className="info__title">{title}</h1>
        <div className="info__content">
          {sections.map((section, i) => (
            <div key={i} className="info__section">
              <h2 className="info__heading">{section.heading}</h2>
              <p className="info__text">{section.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default InfoPage;