"use client";
import React, { PropsWithChildren, ReactElement, useState } from "react";

// Define the props for individual tab elements
interface TabProps {
  tabId: string; // Unique identifier for the tab
  activeTab?: string; // Currently active tab
  onTabClick?: (tabId: string) => void; // Callback when a tab is clicked
}

// Define the props for the Tabs component
interface TabsProps extends PropsWithChildren {
  // No additional props needed since it only accepts `children`
}

const Tabs: React.FC<TabsProps> = ({ children }) => {
  // State to track the active tab
  const [activeTab, setActiveTab] = useState<string>("1");

  // Handler for tab click events
  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
  };

  return React.Children.map(children, (child) => {
    // Ensure the child is a valid React element before cloning
    if (React.isValidElement<TabProps>(child)) {
      return React.cloneElement(child, {
        activeTab,
        onTabClick: handleTabClick,
      });
    }
    return child;
  });
};

export default Tabs;
