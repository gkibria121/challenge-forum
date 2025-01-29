"use client";
import React, { PropsWithChildren } from "react";
import Table from "@/components/ui/Table";
import { Challenge, PropsWithChallengeId } from "@/types/challenges";
import Tag from "@/components/ui/Tag";
import { useRouter } from "next/navigation";

type ContextValueType = {
  challenges: Challenge[];
  onRowClick: ((id: string) => void) | (() => void);
};

const TableContext = React.createContext<object | null>(null);

function ChallengeTable(props: {
  children: React.ReactNode;
  challenges: Challenge[];
  redirectToPage: boolean;
}) {
  const { children, challenges, redirectToPage } = props;
  const rotuer = useRouter();
  const contextValue: ContextValueType = {
    challenges,
    onRowClick: redirectToPage
      ? (id: string) => {
          rotuer.push(`/challenges/${id}`);
        }
      : () => {},
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

function Heading({ children }: { children?: React.ReactElement }) {
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

function Body({ children }: { children?: React.ReactElement }) {
  const { challenges, onRowClick } = React.useContext(
    TableContext,
  ) as ContextValueType;

  if (!challenges) {
    return null;
  }
  const childrenArray = React.Children.toArray(
    children,
  ) as React.ReactElement[];

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
            .filter((child: any) => child.type.name === ColExtra.name)
            .map((child: any) => {
              return React.cloneElement(child, {
                ...child.props,
                challengeId: challenge.id,
              });
            })}
        </Table.Row>
      ))}
      {childrenArray.filter((child: any) => child.type.name === RowExtra.name)}
    </Table.Body>
  );
}

function RowExtra({ children }: PropsWithChildren) {
  return children;
}

function ColExtra({
  challengeId,
  children,
  ...props
}: PropsWithChildren & PropsWithChallengeId) {
  return (
    <Table.Col {...props}>
      {React.Children.map(children, (child: any) =>
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
