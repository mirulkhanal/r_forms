// TabContainer.tsx

import React, { ReactNode, useState } from 'react';

type TabPageProps = {
  label: string;
  children: ReactNode;
};

export const TabPage: React.FC<TabPageProps> = ({ label, children }) => {
  return (
    <div>
      <h3>{label}</h3>
      {children}
    </div>
  );
};

type TabContainerProps = {
  children: ReactNode;
};

export const TabContainer: React.FC<TabContainerProps> = ({ children }) => {
  const [selectedTab, setSelectedTab] = useState<string>('Component List');

  const handleTabChange = (tabLabel: string) => {
    setSelectedTab(tabLabel);
  };

  return (
    <div>
      <div style={{ display: 'flex', marginBottom: '10px' }}>
        {/* Loop over children to create tabs dynamically */}
        {React.Children.map(children, (child: any) => (
          <div
            style={{
              padding: '10px',
              cursor: 'pointer',
              backgroundColor:
                selectedTab === child.props.label ? '#ddd' : '#f4f4f4',
            }}
            onClick={() => handleTabChange(child.props.label)}>
            {child.props.label}
          </div>
        ))}
      </div>
      <div>
        {/* Render the selected tab content */}
        {React.Children.map(children, (child: any) => {
          return child.props.label === selectedTab ? child : null;
        })}
      </div>
    </div>
  );
};
