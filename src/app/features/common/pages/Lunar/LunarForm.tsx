import clsx from 'clsx';

export const LunarForm = () => {
  return (
    <form className="group">
      <label className="block">
        <span className="block text-sm font-medium text-slate-700">Username</span>
        <input
          type="text"
          required
          onChange={(event) => console.log(event.target.value)}
          className={clsx(
            'peer mt-1 block w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm placeholder-slate-400 shadow-sm',
            'invalid:border-pink-500 invalid:text-pink-600',
            'focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500',
            'focus:invalid:border-pink-500 focus:invalid:ring-pink-500',
            'disabled:border-slate-200 disabled:bg-slate-50 disabled:text-slate-500 disabled:shadow-none'
          )}
        />

        <div className="invisible peer-invalid:visible">
          <p className="mt-2 text-sm text-pink-600">Please provide a valid email address.</p>
        </div>
      </label>
    </form>
  );
};
