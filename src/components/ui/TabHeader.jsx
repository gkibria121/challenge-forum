"use client";
import React, { createContext, useContext, useEffect, useState } from "react";

const TabContext = createContext();

const Tabs = ({ children, onTabChange }) => {
  const TabListReactEl = React.Children.toArray(children).find(
    (child) => child.type.name === TabList.name
  );
  const tabKeys = TabListReactEl.props.children.map((child) => child.props?.id);
  const [activeTab, setActiveTab] = useState(tabKeys[0] ?? "");

  useEffect(() => {
    onTabChange(activeTab);
  }, [activeTab]);

  let currentTabPanelToRender = 0;
  return (
    <TabContext.Provider value={{ activeTab, setActiveTab }}>
      <div className="tabs">
        {React.Children.map(children, (child) => {
          if (child.type?.name !== TabPanel.name) {
            return child;
          }
          return React.cloneElement(child, {
            ...child.props,
            id: tabKeys[currentTabPanelToRender++],
          });
        })}
      </div>
    </TabContext.Provider>
  );
};

const TabList = ({ children }) => {
  return <div className="tabs__header">{children}</div>;
};

function Tab({ children, id }) {
  const { activeTab, setActiveTab } = useTabContext();
  const isActive = activeTab === id;
  return (
    <button
      key={id}
      className={`tab__link ${isActive ? "tab__link--active" : ""}`}
      onClick={() => setActiveTab(id)}
    >
      {children}
    </button>
  );
}

const TabActions = ({ children }) => {
  return <div>{children}</div>;
};

function TabPanel({ children, id }) {
  const { activeTab } = useTabContext();
  if (activeTab !== id) return;
  return <div className="tabs__body">{children}</div>;
}

Tabs.Tab = Tab;
Tabs.TabList = TabList;
Tabs.TabActions = TabActions;
Tabs.TabPanel = TabPanel;

export default Tabs;

const useTabContext = () => useContext(TabContext);
