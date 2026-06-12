import React, { useState } from "react";
import "./Tabs.css";

export function Tabs({ tabs, defaultActiveId }) {
  const initialTab =
    defaultActiveId || (tabs.length > 0 ? tabs[0].id : "");

  const [activeTab, setActiveTab] = useState(initialTab);

  const activeContent = tabs.find((tab) => tab.id === activeTab);

  return (
    <div className="tabs-container">
      <div className="tabs-header" role="tablist">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            role="tab"
            aria-selected={activeTab === tab.id}
            className={`tab-button ${
              activeTab === tab.id ? "tab-active" : ""
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="tab-content" role="tabpanel">
        {activeContent?.content}
      </div>
    </div>
  );
}