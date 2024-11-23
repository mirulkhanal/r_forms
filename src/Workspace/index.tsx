import React from 'react';
import { ComponentPropType } from '../_types';

const Workspace: React.FC<{
  components: ComponentPropType[];
  setComponents: React.Dispatch<React.SetStateAction<ComponentPropType[]>>;
}> = ({ components, setComponents }) => {
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const component = JSON.parse(
      e.dataTransfer.getData('component')
    ) as ComponentPropType;
    setComponents((prev) => [
      ...prev,
      { ...component, id: Date.now().toString() },
    ]);
  };

  const handleDragOver = (e: React.DragEvent) => e.preventDefault();

  return (
    <div
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      style={{
        flex: 1,
        padding: '20px',
        backgroundColor: '#f0f0f0',
        minHeight: '100%',
        overflow: 'auto',
      }}>
      <h3>Workspace</h3>
      {components.map((component) => (
        <div
          key={component.id}
          style={{
            marginBottom: '10px',
            border: '1px solid #ccc',
            padding: '10px',
            backgroundColor: '#fff',
          }}>
          {component.type === 'button' && (
            <button>{component.properties?.children}</button>
          )}
          {component.type === 'input' && (
            <input placeholder={component.properties?.placeholder} />
          )}
          {component.type === 'heading1' && (
            <h1>{component.properties?.children}</h1>
          )}
        </div>
      ))}
    </div>
  );
};

export default Workspace;
