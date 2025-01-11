"use client";
import React, { useState } from "react";

const Tabs = ({ children }) => {
  const [activeTab, setActiveTab] = useState("1");

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return React.Children.map(children, (child) =>
    React.cloneElement(child, { activeTab, onTabClick: handleTabClick })
  );
};

export default Tabs;
