import React from 'react';
import { ComponentPropType } from '../_types';

interface PropertiesPanelProps {
  component: ComponentPropType;
  updateProperties: (
    updatedProperties: Partial<ComponentPropType['properties']>
  ) => void;
}
const PropertiesPanel: React.FC<PropertiesPanelProps> = ({
  component,
  updateProperties,
}) => {
  if (!component) {
    return <div>Error: No component selected!</div>;
  }

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    updateProperties({ [name]: value });
  };

  return (
    <div>
      <h4>{component.name} Properties</h4>
      {component.properties &&
        Object.entries(component.properties).map(([key, value]) => (
          <div key={key} style={{ marginBottom: '10px' }}>
            <label>
              {key}:
              <input
                name={key}
                value={value as string}
                onChange={handleInputChange}
                style={{ width: '100%', padding: '5px' }}
              />
            </label>
          </div>
        ))}
    </div>
  );
};

export default PropertiesPanel;
