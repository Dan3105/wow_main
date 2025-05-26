// Define component types with craft property
export interface CraftComponent<T = any> extends React.FC<T> {
  craft?: {
    displayName: string;
    props: T;
    related: Record<string, any>;
    rules: {
      canDrag: () => boolean;
      canDrop: () => boolean;
      canMoveIn: () => boolean;
      canMoveOut: () => boolean;
    };
  };
}
