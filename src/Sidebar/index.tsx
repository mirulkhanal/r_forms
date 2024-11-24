import React, { useState } from 'react';
import { ComponentPropType } from '../_types';
import { TabContainer, TabPage } from './Tabs/container'; // Import TabContainer and TabPage
import PropertiesPanel from './PropertiesPanel';

const Sidebar: React.FC<{ components: ComponentPropType[] }> = ({
  components,
}) => {
  const [selectedComponent, setSelectedComponent] =
    useState<ComponentPropType | null>(null);

  const handleComponentClick = (component: ComponentPropType) => {
    setSelectedComponent(component);
  };

  const handleDragStart = (
    e: React.DragEvent<HTMLDivElement>,
    component: ComponentPropType
  ) => {
    e.dataTransfer.setData('application/json', JSON.stringify(component));
  };

  return (
    <div
      style={{
        width: '250px',
        backgroundColor: '#f4f4f4',
        borderRight: '2px solid #ddd',
        padding: '10px',
        display: 'flex',
        flexDirection: 'column',
      }}>
      <TabContainer>
        {/* Tab 1: Component List */}
        <TabPage label='Component List'>
          <h3>Component List</h3>
          {components.map((component) => (
            <div
              key={component.id}
              draggable
              onDragStart={(e) => handleDragStart(e, component)}
              onClick={() => handleComponentClick(component)} // Select component
              style={{
                padding: '10px',
                marginBottom: '10px',
                backgroundColor: '#fff',
                border: '1px solid #ddd',
                borderRadius: '4px',
                cursor: 'grab',
              }}>
              {component.name}
            </div>
          ))}
        </TabPage>

        {/* Tab 2: Properties */}
        <TabPage label='Properties'>
          <h3>Properties</h3>
          {selectedComponent ? (
            <PropertiesPanel
              component={selectedComponent}
              updateProperties={(updatedProperties) => {
                // handle the property update logic here
              }}
            />
          ) : (
            <div>Select a component to view its properties.</div>
          )}
        </TabPage>
      </TabContainer>
    </div>
  );
};

export default Sidebar;
