import React from "react";
import Table from "@/components/ui/Table";
import Tag from "@/components/ui/Tag";

const TableContext = React.createContext();

function ChallengeTable(props) {
  const { children, challenges, onChallengeClick = () => {} } = props;

  const contextValue = {
    challenges,
    onRowClick: onChallengeClick,
  };

  return (
    <TableContext.Provider value={contextValue}>
      <Table>
        {children ? (
          children
        ) : (
          <>
            <Heading />
            <Body />
          </>
        )}
      </Table>
    </TableContext.Provider>
  );
}

function Heading({ children }) {
  return (
    <Table.Head>
      {[
        { label: "No.", key: "id", colSpan: 1 },
        { label: "Title", key: "title", colSpan: 1 },
        {
          label: "Tag",
          key: "tags",
          class: "text-center",
        },
      ].map((heading) => (
        <Table.Heading key={heading.key} className={heading.class}>
          {heading.label}
        </Table.Heading>
      ))}
      {children}
    </Table.Head>
  );
}

function Body({ children }) {
  const { challenges, onRowClick } = React.useContext(TableContext);

  if (!challenges) {
    return null;
  }
  const childrenArray = React.Children.toArray(children);

  return (
    <Table.Body>
      {challenges.map((challenge) => (
        <Table.Row key={challenge.id} onClick={() => onRowClick(challenge.id)}>
          <Table.Col>{challenge.id}</Table.Col>
          <Table.Col>{challenge.title}</Table.Col>
          <Table.Col className="text-center">
            {challenge.tags.map((tag) => (
              <Tag key={tag} label={tag} />
            ))}
          </Table.Col>
          {childrenArray
            .filter((child) => child.type.name === ColExtra.name)
            .map((child) => {
              return React.cloneElement(child, {
                ...child.props,
                challengeId: challenge.id,
              });
            })}
        </Table.Row>
      ))}
      {childrenArray.filter((child) => child.type.name === RowExtra.name)}
    </Table.Body>
  );
}

function RowExtra({ children }) {
  return children;
}

function ColExtra({ challengeId, children, ...props }) {
  return (
    <Table.Col {...props}>
      {React.Children.map(children, (child) =>
        React.cloneElement(child, {
          ...child.props,
          onClick: () => child.props.onClick?.(challengeId),
        }),
      )}
    </Table.Col>
  );
}
ChallengeTable.Heading = Heading;
ChallengeTable.Body = Body;
ChallengeTable.RowExtra = RowExtra;
ChallengeTable.ColExtra = ColExtra;

export default ChallengeTable;
