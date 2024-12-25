import { LunarBox } from './LunarBox';
import { LunarForm } from './LunarForm';
import { LunarList } from './LunarList';
import './Lunar.css';
import { useEffect, useMemo, useState } from 'react';
import clsx from 'clsx';

type BrowserTheme = 'light' | 'dark' | 'system';

export const Lunar = () => {
  const [mode, setMode] = useState<BrowserTheme>('light');

  const darkModeClass = useMemo(() => {
    if (mode === 'dark') {
      return 'dark';
    }
    if (mode === 'system') {
      const prefersDark = matchMedia('(prefers-color-scheme: dark)').matches;
      return prefersDark ? 'dark' : '';
    }
    return '';
  }, [mode]);

  useEffect(() => {
    console.log('read state::', mode);

    if (mode === 'system') {
      const prefersDark = matchMedia('(prefers-color-scheme: dark)').matches;
      console.log(prefersDark);
    }
  }, [mode]);

  return (
    <article className="p-1 text-base">
      <div className={clsx('mt-4', darkModeClass)}>
        <div className="w-[400px] rounded-lg bg-white px-6 py-8 shadow-xl ring-1 ring-slate-900/5 transition-colors dark:bg-slate-800">
          <div>
            <span className="inline-flex items-center justify-center rounded-md bg-indigo-500 p-2 shadow-lg">
              <svg
                className="h-6 w-6 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                ></path>
              </svg>
            </span>
          </div>
          <h3 className="mt-5 text-base font-medium tracking-tight text-slate-900 dark:text-white">
            Writes Upside-Down
          </h3>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
            The Zero Gravity Pen can be used to write in any orientation, including upside-down. It
            even works in outer space.
          </p>
        </div>
      </div>
      <div className="mt-4">
        <LunarBox />
      </div>
      <button
        type="button"
        className="rounded-lg bg-green-500 px-3 py-2 text-white hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-300 active:bg-green-700"
        onClick={() => setMode('light')}
      >
        Light
      </button>

      <button className="btn-blue ml-4" type="button" onClick={() => setMode('dark')}>
        Dark
      </button>

      <button className="btn-blue ml-4" type="button" onClick={() => setMode('system')}>
        System
      </button>
      <div className="mt-4">
        <LunarList />
      </div>
      <div className="mt-4">
        <LunarForm />
      </div>
    </article>
  );
};
