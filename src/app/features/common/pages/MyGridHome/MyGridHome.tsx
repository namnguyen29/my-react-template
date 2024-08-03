import clsx from 'clsx';
import styles from './MyGridHome.module.scss';

export const MyGridHome = () => {
  return (
    <article
      className={clsx('h-full', 'grid-rows-min-60 grid grid-cols-2', 'gap-4', styles.container)}
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
      <footer className="col-start-1 col-end-3 row-start-4 row-end-5 bg-violet-400">Footer</footer>
    </article>
  );
};
