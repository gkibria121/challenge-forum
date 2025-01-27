const Hints = ({ challenge }) => (
  <div className="mt-[10vh] block h-full w-full p-4">
    <h4 className="tab__heading">{challenge?.hints?.title}</h4>
    <br />
    <p className="tab__content">{challenge?.hints?.description}</p>
  </div>
);

export default Hints;
