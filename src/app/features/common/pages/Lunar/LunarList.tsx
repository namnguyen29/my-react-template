import { useMemo } from 'react';

type User = {
  avatar: string;
  name: string;
  email: string;
};

export const LunarList = () => {
  const users = useMemo<User[]>(
    () => [
      {
        avatar: 'https://via.placeholder.com/150/92c952',
        name: 'Alice Johnson',
        email: 'alice.johnson@example.com'
      },
      {
        avatar: 'https://via.placeholder.com/150/771796',
        name: 'Bob Smith',
        email: 'bob.smith@example.com'
      },
      {
        avatar: 'https://via.placeholder.com/150/24f355',
        name: 'Charlie Brown',
        email: 'charlie.brown@example.com'
      },
      {
        avatar: 'https://via.placeholder.com/150/d32776',
        name: 'Diana Prince',
        email: 'diana.prince@example.com'
      },
      {
        avatar: 'https://via.placeholder.com/150/f66b97',
        name: 'Ethan Hunt',
        email: 'ethan.hunt@example.com'
      }
    ],
    []
  );

  return (
    <ul className="divide-y divide-slate-200 p-6">
      {users.map((user, index) => (
        <li
          key={`${index}-${user.avatar}`}
          className="flex items-center py-4 first:pt-0 last:pb-0 odd:bg-violet-500 even:bg-yellow-500"
        >
          <img src={user.avatar} alt={user.avatar} className="h-[80px] w-[80px] rounded-full" />
          <div className="ml-3 overflow-hidden">
            <p className="text-sm font-medium text-slate-900">{user.name}</p>
            <p className="truncate text-sm text-slate-500">{user.email}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};
