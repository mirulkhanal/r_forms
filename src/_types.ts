export type ComponentType =
  | 'button'
  | 'input'
  | 'heading1'
  | 'heading2'
  | 'label'
  | 'image'
  | 'card';

export interface ComponentPropType {
  id: string; // Unique identifier for the component
  name: string; // Display name for the component
  type: ComponentType; // Type of the component (e.g., button, input)
  properties?: Record<string, string>;
}
