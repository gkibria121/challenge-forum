"use client";
import React, { createContext, useContext, useEffect, useState } from "react";

const TabContext = createContext();

const Tabs = ({ children, onTabChange = () => {} }) => {
  const TabListReactEl = React.Children.toArray(children).find(
    (child) => child.type.name === TabList.name,
  );
  const tabKeys = TabListReactEl.props.children.map((child) => child.props?.id);
  const [activeTab, setActiveTab] = useState(tabKeys[0] ?? "");

  useEffect(() => {
    onTabChange(activeTab);
  }, [activeTab]);

  let currentTabPanelToRender = 0;
  return (
    <TabContext.Provider value={{ activeTab, setActiveTab }}>
      <div className="h-full w-full">
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
  return <div className="relative">{children}</div>;
};

function Tab({ children, id }) {
  const { activeTab, setActiveTab } = useTabContext();
  const isActive = activeTab === id;
  return (
    <button
      key={id}
      className={`ml-4 cursor-pointer bg-white p-0 pb-2 ${isActive ? "relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:bg-black" : ""}`}
      onClick={() => {
        setActiveTab(id);
      }}
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
  console.log(activeTab, id);
  if (activeTab !== id) return;
  return <div className="h-full w-full">{children}</div>;
}

Tabs.Tab = Tab;
Tabs.TabList = TabList;
Tabs.TabActions = TabActions;
Tabs.TabPanel = TabPanel;

export default Tabs;

const useTabContext = () => useContext(TabContext);
