// Description.jsx
export const Description = ({challenge}) => (
    <div className="tab tab--active">
      <h4 className="tab__heading">{challenge.title}</h4>
      <p className="tab__content">
      {challenge.description}
      </p>
    </div>
  );


export default Description;