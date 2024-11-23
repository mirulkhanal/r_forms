import React from 'react';
import { ComponentPropType } from '../_types';

const Sidebar: React.FC<{ components: ComponentPropType[] }> = ({
  components,
}) => {
  const handleDragStart = (
    e: React.DragEvent,
    component: ComponentPropType
  ) => {
    e.dataTransfer.setData('component', JSON.stringify(component));
  };

  return (
    <div
      style={{
        width: '200px',
        backgroundColor: '#f4f4f4',
        borderRight: '2px solid #ddd',
        padding: '10px',
      }}>
      <h3>Sidebar</h3>
      {components.map((component) => (
        <div
          key={component.id}
          draggable
          onDragStart={(e) => handleDragStart(e, component)}
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
    </div>
  );
};

export default Sidebar;
