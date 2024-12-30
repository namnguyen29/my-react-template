import { MouseEvent, ReactNode, useState } from 'react';

type Props = {
  zone: ReactNode;
  children: (value: { x: number; y: number }) => ReactNode;
};

export const MouseTracker = ({ children, zone }: Props) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>): void => {
    setPosition((prev) => ({
      ...prev,
      x: event.clientX,
      y: event.clientY
    }));
  };

  return (
    <div role="tooltip" className="border-2 border-red-500 p-4" onMouseMove={handleMouseMove}>
      <p className="text-violet-300">Track my position in this div</p>
      <ul>
        <li>x: {position.x}</li>
        <li>y: {position.y}</li>
        <li>{children({ x: position.x, y: position.y })}</li>
      </ul>

      <div className="bg-violet-200">{zone}</div>
    </div>
  );
};
