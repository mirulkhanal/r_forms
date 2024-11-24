import { useState } from 'react';
import Sidebar from '../Sidebar';
import Workspace from '../Workspace';
import PropertiesPanel from '../Sidebar/PropertiesPanel';
import { ComponentPropType } from '../_types';

const predefinedComponents: ComponentPropType[] = [
  {
    id: 'btn1',
    name: 'Button',
    type: 'button',
    properties: { children: 'Click Me' },
  },
  {
    id: 'input1',
    name: 'Input',
    type: 'input',
    properties: { placeholder: 'Enter text' },
  },
  {
    id: 'heading1',
    name: 'Heading 1',
    type: 'heading1',
    properties: { children: 'Heading 1' },
  },
];

const Editor = () => {
  const [workspaceComponents, setWorkspaceComponents] = useState<
    ComponentPropType[]
  >([]);

  const handleComponentDrop = (component: ComponentPropType) => {
    const newComponent = {
      ...component,
      id: `${component.type}-${Date.now()}`,
    }; // Unique ID
    setWorkspaceComponents((prev) => [...prev, newComponent]);
  };

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <Sidebar components={predefinedComponents} />
      <Workspace
        components={workspaceComponents}
        onComponentDrop={handleComponentDrop}
      />
    </div>
  );
};

export default Editor;
