// Description.jsx
export const Description = ({ challenge }) => (
  <div className="block h-full w-full p-4">
    <h4 className="mt-16 block">{challenge.title}</h4>
    <p className="tab__content">{challenge.description}</p>
  </div>
);

export default Description;
