import clsx from 'clsx';

export const ColorfulSection = () => {
  const colors = [
    'bg-red-500',
    'bg-blue-500',
    'bg-green-500',
    'bg-yellow-500',
    'bg-purple-500',
    'bg-pink-500',
    'bg-indigo-500',
    'bg-teal-500',
    'bg-orange-500',
    'bg-gray-500'
  ];
  const groupColors = ['bg-red-500', 'bg-blue-500', 'bg-green-500', 'bg-yellow-500'];
  const randomId = Math.random();

  return (
    <>
      <section
        className={clsx(
          'grid auto-cols-[20%] grid-flow-col gap-4 overflow-x-auto',
          'snap-inline overscroll-inline-contain snap-mandatory scroll-ps-6'
        )}
      >
        {colors.map((color, index) => (
          <div
            key={`${color}-${index}`}
            className={`p-4 ${color} h-40 w-40 snap-start rounded text-center text-white shadow`}
          >
            <p>Div {index + 1}</p>
          </div>
        ))}
      </section>

      <div
        className={clsx(
          'grid auto-cols-[100%] grid-flow-col gap-4 overflow-x-auto border-2 border-yellow-300 p-4',
          'overscroll-inline-contain snap-inline snap-mandatory scroll-pe-4 scroll-ps-4'
        )}
      >
        {groupColors.map((color, colIndex) => (
          <div
            key={`${color}-${colIndex}`}
            className="grid snap-start auto-cols-[20%] grid-flow-col items-center border-2 border-violet-300 py-2"
          >
            {Array.from({ length: 4 }).map((_, rowIndex) => (
              <div
                key={`${randomId}-${rowIndex}`}
                className={`h-40 w-40 ${color} flex items-center justify-center text-white`}
              >
                <p>{`Group ${colIndex + 1}, Line ${rowIndex + 1}`}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
};
