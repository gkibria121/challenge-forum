const Hints = ({challenge}) => (
    <div className="tab tab--active">
      <h4 className="tab__heading">{challenge.title}</h4>
      <br />
      <p className="tab__content">
       {challenge.hints}
      </p>
    </div>
  );

export default Hints;