import React, { useState } from 'react';
import Sidebar from '../Sidebar';
import Workspace from '../Workspace';
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

const Editor: React.FC = () => {
  const [workspaceComponents, setWorkspaceComponents] = useState<
    ComponentPropType[]
  >([]);

  return (
    <div style={{ display: 'flex', width: '100vw', height: '100vh' }}>
      <Sidebar components={predefinedComponents} />
      <Workspace
        components={workspaceComponents}
        setComponents={setWorkspaceComponents}
      />
    </div>
  );
};

export default Editor;
