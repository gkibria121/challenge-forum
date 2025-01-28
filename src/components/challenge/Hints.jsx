const Hints = ({ hints }) => (
  <div className="mt-[10vh] block h-full w-full p-4">
    <h4 className="tab__heading">{hints?.title}</h4>
    <br />
    <p className="tab__content">{hints?.description}</p>
    {(!hints?.title || !hints?.description) && <div>No hints</div>}
  </div>
);

export default Hints;
