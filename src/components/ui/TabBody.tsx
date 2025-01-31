import React, { PropsWithChildren } from "react";

const TabBody = ({
  activeTab,
  children,
}: { activeTab: string } & PropsWithChildren) => {
  return (
    <div className="h-full w-full">
      {React.Children.map(children, (child: any) =>
        React.cloneElement(child, { isActive: child.props.id === activeTab }),
      )}
    </div>
  );
};

export default TabBody;
