const Hints = ({ challenge }) => (
  <div className="block hidden h-full w-full p-4">
    <h4 className="tab__heading">{challenge?.hints?.title}</h4>
    <br />
    <p className="tab__content">{challenge?.hints?.description}</p>
  </div>
);

export default Hints;
