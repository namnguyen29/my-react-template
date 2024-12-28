import clsx from 'clsx';

import styles from './MyGridHome.module.scss';
import { Table as AppTable } from '@app-shared/components';

type Driver = {
  name: string;
  poles: number;
  podiums: number;
  wins: number;
  careerPoints: number;
  championships: number;
};

export const MyGridHome = () => {
  const headers = ['Name', 'Poles', 'Podiums', 'Wins', 'Career points', 'Championships'];
  const drivers: Driver[] = [
    {
      name: 'Max Verstappen',
      poles: 22,
      podiums: 80,
      wins: 37,
      careerPoints: 2080.5,
      championships: 5
    },
    {
      name: 'Lewis Hamilton',
      poles: 103,
      podiums: 195,
      wins: 103,
      careerPoints: 4581.5,
      championships: 7
    },
    {
      name: 'Sebastian Vettel',
      poles: 57,
      podiums: 122,
      wins: 53,
      careerPoints: 3098,
      championships: 4
    },
    {
      name: 'Nico Rosberg',
      poles: 30,
      podiums: 57,
      wins: 23,
      careerPoints: 1594.5,
      championships: 1
    },
    {
      name: 'Fernando Alonso',
      poles: 22,
      podiums: 104,
      wins: 32,
      careerPoints: 2118,
      championships: 2
    },
    {
      name: 'Kimi Räikkönen',
      poles: 18,
      podiums: 103,
      wins: 21,
      careerPoints: 1873,
      championships: 1
    }
  ];

  return (
    <>
      <article
        className={clsx('h-full', 'grid grid-cols-2 grid-rows-min-60', 'gap-4', styles.container)}
      >
        <header className="col-start-1 col-end-3 bg-red-400">
          <span>Header</span>
        </header>
        <nav className="col-start-1 col-end-2 row-start-2 row-end-4 bg-blue-400">Navigation</nav>
        <section className="bg-yellow-400">Content 1</section>
        <section className="bg-green-400">
          <p>Content</p>
          <p>Jenny</p>
        </section>
        <footer className="col-start-1 col-end-3 row-start-4 row-end-5 bg-violet-400">
          Footer
        </footer>
      </article>

      <div className="p-4">
        <AppTable<Driver>
          data={drivers}
          headers={headers}
          caption="The last 14 world F1 champions"
        />
      </div>
    </>
  );
};
