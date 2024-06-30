// import { useEffect } from 'react';

// import { useMatch } from 'react-router-dom';

import { Calculator, WatchTimer } from '@app-features/common/components';
// import { columns, defaultData } from '@app-shared/constants';
// import { Person } from '@app-shared/types';
import { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

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
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    console.log('before::', Object.fromEntries([...searchParams]));
    setSearchParams((prev) => {
      prev.append('test', '1234');
      prev.append('test0', '4231');
      return prev;
    });
    console.log('after::', Object.fromEntries([...searchParams]));

    console.log('ref on page::', containerRef);

    // eslint-disable-next-line react-hooks/exhaustive-deps
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
