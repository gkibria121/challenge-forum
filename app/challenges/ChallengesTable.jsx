// ChallengesTable Component

import TableRow from "./../../src/components/TableRow"
const ChallengesTable = ({ challenges, onRowClick }) => {
    return (
      <table className="table">
        <thead className="table__thead">
          <tr>
            <th className="table__th">No.</th>
            <th colSpan="3" className="table__th">Title</th>
            <th className="table__th table__th--tag">Tag</th>
          </tr>
        </thead>
        <tbody className="table__tbody">
          {challenges.map((challenge, index) => (
            <TableRow
              key={challenge.id}
              number={index + 1}
              title={challenge.title}
              tag={challenge.tag}
              challengeId={challenge.id}
              onClick={onRowClick}
            />
          ))}
        </tbody>
      </table>
    );
  };

export default  ChallengesTable;