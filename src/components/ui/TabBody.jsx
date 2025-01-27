import React from "react";

const TabBody = ({ activeTab, children }) => {
  return (
    <div className="h-full w-full">
      {React.Children.map(children, (child) =>
        React.cloneElement(child, { isActive: child.props.id === activeTab }),
      )}
    </div>
  );
};

export default TabBody;
