// import { useEffect } from 'react';

// import { useMatch } from 'react-router-dom';

import { Calculator, WatchTimer } from '@app-features/common/components';
// import { columns, defaultData } from '@app-shared/constants';
// import { Person } from '@app-shared/types';
import { useEffect, useRef, useState } from 'react';

export const Dashboard = () => {
  const [isShow, setIsShow] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  // const match = useMatch('/dashboard');

  // useEffect(() => {
  //   console.log('match route::', match);
  // }, [match]);
  // const changeBorder = (borderClass: string): void => {
  //   containerRef.current?.classList.add(borderClass);
  // };

  useEffect(() => {
    console.log('ref on page::', containerRef);
  }, []);

  return (
    <article className="dashboard-page-container">
      <button type="button" onClick={() => setIsShow((prev) => !prev)}>
        Unmount
      </button>
      {isShow && <WatchTimer title="I'm a timer" ref={containerRef} />}
      <Calculator />
    </article>
  );
};
