import { useEffect, useRef } from 'react';

export const ScrollSnap = () => {
  const scrollRef = useRef<HTMLElement | null>(null);
  const options: IntersectionObserverInit = { rootMargin: '0px', threshold: 1 };
  const handleObserver: IntersectionObserverCallback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        console.log('watch dom target::', entry.target);
      }
    });
  };
  const scrollObserver = new IntersectionObserver(handleObserver, options);

  useEffect(() => {
    // use intersection observer
    if (scrollRef.current) {
      const scrollBlocks = scrollRef.current?.querySelectorAll('div');
      scrollBlocks.forEach((block) => {
        scrollObserver.observe(block);
      });
    }

    return () => scrollObserver.disconnect();
  });

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
      className="mx-auto block h-screen max-w-[900px] snap-y snap-mandatory overflow-y-scroll text-white"
    >
      <div className="h-screen snap-center snap-always bg-red-400" id="bd-1">
        <h3>Red</h3>
      </div>
      <div className="h-screen snap-center snap-always bg-yellow-400" id="bd-2">
        <h3>Yellow</h3>
      </div>
      <div className="h-screen snap-center snap-always bg-green-400" id="bd-3">
        <h3>Green</h3>
      </div>
      <div className="h-screen snap-center snap-always bg-violet-400" id="bd-4">
        <h3>Violet</h3>
      </div>
    </article>
  );
};
