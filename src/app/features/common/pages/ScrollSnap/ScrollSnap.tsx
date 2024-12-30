import { useEffect, useRef } from 'react';

import styles from './ScrollSnap.module.scss';

import { Button } from '@mantine/core';

const options: IntersectionObserverInit = {
  rootMargin: '0px',
  threshold: 0.5
};
const scrollIds = ['bd-1', 'bd-2', 'bd-3', 'bd-4'];

export const ScrollSnap = () => {
  const scrollRef = useRef<HTMLElement | null>(null);

  const handleObserver: IntersectionObserverCallback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const buttons = document.querySelectorAll('button.selector');
        buttons.forEach((button) => {
          if (button.getAttribute('data-id') === entry.target.id) {
            button.classList.add(styles.activated);
            return;
          }

          button.classList.remove(styles.activated);
        });
        console.log('vieww dom intersecting::', entry.target);
      }
    });
  };

  const handleClick = (id: string): void => {
    const targetElement = scrollRef.current?.querySelector(`div#${id}`);
    const buttons = document.querySelectorAll('button.selector');
    buttons.forEach((button) => {
      if (button.getAttribute('data-id') === id) {
        button.classList.add(styles.activated);
        return;
      }

      button.classList.remove(styles.activated);
    });
    targetElement?.scrollIntoView({
      block: 'start',
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    const scrollObserver = new IntersectionObserver(handleObserver, options);

    if (scrollRef.current) {
      const scrollBlocks = scrollRef.current?.querySelectorAll('div.snap-item');
      scrollBlocks.forEach((block) => {
        scrollObserver.observe(block);
      });
    }

    return () => scrollObserver.disconnect();
  }, []);

  // useEffect(() => {
  //   // use snap type event
  //   scrollRef.current?.addEventListener('scrollsnapchanging', (event) => {
  //     if ('snapTargetBlock' in event) {
  //       const targetBlock = event.snapTargetBlock as HTMLDivElement;
  //       console.log('scrolling block id::', targetBlock.id);
  //     }
  //   });
  // });

  return (
    <article
      ref={scrollRef}
      className="relative mx-auto block h-[700px] max-w-[900px] snap-y snap-mandatory overflow-y-auto text-white"
    >
      <div className="sticky top-[50%] z-20 flex translate-y-[-50%] flex-col items-end gap-2 pr-3">
        {scrollIds.map((id, idx) => (
          <Button
            key={`${idx}-${id}`}
            className={`selector bg-white text-gray-900 ${idx === 0 && styles.activated}`}
            data-id={id}
            onClick={() => handleClick(id)}
          >
            {idx + 1}
          </Button>
        ))}
      </div>
      <div className="snap-item z-[1] h-[700px] snap-start bg-red-400" id="bd-1">
        <h3>Red</h3>
      </div>
      <div className="snap-item z-[1] h-[700px] snap-start bg-yellow-400" id="bd-2">
        <h3>Yellow</h3>
      </div>
      <div className="snap-item z-[1] h-[700px] snap-start bg-green-400" id="bd-3">
        <h3>Green</h3>
      </div>
      <div className="snap-item z-[1] h-[700px] snap-start bg-violet-400" id="bd-4">
        <h3>Violet</h3>
      </div>
    </article>
  );
};
