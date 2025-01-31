import { Challenge } from "@/types/challenges";

export const Description = ({ challenge }: { challenge: Challenge }) => (
  <div className="mt-[10vh] block h-full w-full p-4">
    <h4 className="mt-16 block">{challenge.title}</h4>
    <p className="tab__content">{challenge.description}</p>
  </div>
);

export default Description;
