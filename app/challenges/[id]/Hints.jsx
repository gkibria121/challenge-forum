const Hints = ({challenge}) => (
    <div className="tab tab--active">
      <h4 className="tab__heading">{challenge?.hints?.title}</h4>
      <br />
      <p className="tab__content">
      {challenge?.hints?.description}
      </p>
    </div>
  );

export default Hints;