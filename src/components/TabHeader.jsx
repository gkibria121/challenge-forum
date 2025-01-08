import React from "react";

const TabHeader = ({
  children,
  activeTab,
  onTabClick,
  tabs, 

  actions
}) => {
  return (
    <div className="tabs__header">
      {tabs.map(({ id, label }) => (
        <button
          key={id}
          className={`tab__link ${activeTab === id ? "tab__link--active" : ""}`}
          onClick={() => onTabClick(id)}
        >
          {label}
        </button>
      ))}
      {children}
    </div>
  );
};

export default TabHeader;
