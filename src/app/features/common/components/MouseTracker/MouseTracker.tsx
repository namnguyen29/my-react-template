import { MouseEvent, ReactNode, useState } from 'react';

type Props = {
  children: (value: { x: number; y: number }) => ReactNode;
};

export const MouseTracker = ({ children }: Props) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const handleMouseMove = (event: MouseEvent<HTMLDivElement>): void => {
    setPosition((prev) => ({
      ...prev,
      x: event.clientX,
      y: event.clientY
    }));
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      style={{
        border: '2px solid red',
        padding: '1rem'
      }}
    >
      <p style={{ color: 'red' }}>Track my position in this div</p>
      <ul>
        <li>x: {position.x}</li>
        <li>y: {position.y}</li>
      </ul>
      {children({ x: position.x, y: position.y })}
    </div>
  );
};
