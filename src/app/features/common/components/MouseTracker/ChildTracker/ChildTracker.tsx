export const ChildTracker = ({ x, y }: { x: number; y: number }) => {
  return (
    <div>
      my child tracker
      <ul>
        <li>child-x : {x}</li>
        <li>child-y: {y}</li>
      </ul>
    </div>
  );
};
