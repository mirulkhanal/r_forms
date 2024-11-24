import React from 'react';
import { ComponentPropType } from '../_types';

interface WorkspaceProps {
  components: ComponentPropType[];
  onComponentDrop: (component: ComponentPropType) => void;
}

const Workspace: React.FC<WorkspaceProps> = ({
  components,
  onComponentDrop,
}) => {
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault(); // Allow drop
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const componentData = e.dataTransfer.getData('application/json');
    const component = JSON.parse(componentData) as ComponentPropType;
    onComponentDrop(component); // Pass the component to the parent
  };

  return (
    <div
      style={{
        flex: 1,
        border: '1px solid #ddd',
        padding: '10px',
        overflow: 'auto',
      }}
      onDragOver={handleDragOver}
      onDrop={handleDrop}>
      {components.map((component) => (
        <div
          key={component.id}
          style={{
            padding: '10px',
            margin: '5px',
            border: '1px dashed #aaa',
            cursor: 'pointer',
          }}>
          {component.properties?.children || component.type} "Hee haw"
        </div>
      ))}
    </div>
  );
};

export default Workspace;
