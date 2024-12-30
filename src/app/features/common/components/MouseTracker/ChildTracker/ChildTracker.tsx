type Props = {
  x: number;
  y: number;
};

export const ChildTracker = ({ x, y }: Props) => {
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
