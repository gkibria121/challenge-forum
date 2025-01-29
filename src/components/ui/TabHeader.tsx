"use client";
import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";

type TabContextValue = {
  activeTab: string;
  setActiveTab: Function;
};

const TabContext = createContext<TabContextValue | null>(null);

const Tabs = ({
  children,
  onTabChange = () => {},
}: {
  children: React.ReactNode;
  onTabChange: Function;
}) => {
  interface TabProps {
    id: string;
    children: React.ReactElement<TabProps>[];
  }

  const TabListReactEl: React.ReactElement<TabProps> = React.Children.toArray(
    children,
  ).find(
    (child: any) => child.type.name === TabList.name,
  ) as React.ReactElement<TabProps>;
  const tabKeys = TabListReactEl.props.children.map((child) => child.props?.id);
  const [activeTab, setActiveTab] = useState<string>(tabKeys[0] ?? "");

  useEffect(() => {
    onTabChange(activeTab);
  }, [activeTab]);

  let currentTabPanelToRender = 0;
  return (
    <TabContext.Provider value={{ activeTab, setActiveTab }}>
      <div className="h-full w-full">
        {React.Children.map(children, (child: any) => {
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

const TabList = ({ children }: PropsWithChildren) => {
  return <div className="relative">{children}</div>;
};

function Tab({ children, id }: PropsWithChildren & { id: string }) {
  const { activeTab, setActiveTab } = useTabContext() as TabContextValue;
  const isActive = activeTab === id;
  return (
    <button
      type="button"
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

const TabActions = ({ children }: PropsWithChildren) => {
  return <div>{children}</div>;
};

function TabPanel({
  children,
  id,
}: {
  children: React.ReactNode;
  id?: string;
}) {
  const { activeTab } = useTabContext() as TabContextValue;

  return (
    <div className={`h-full w-full ${activeTab !== id ? "hidden" : ""}`}>
      {children}
    </div>
  );
}

Tabs.Tab = Tab;
Tabs.TabList = TabList;
Tabs.TabActions = TabActions;
Tabs.TabPanel = TabPanel;

export default Tabs;

const useTabContext = () => useContext(TabContext);
