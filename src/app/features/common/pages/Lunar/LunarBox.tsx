import { FolderIcon } from './FolderIcon';
import './LunarBox.css';
export const LunarBox = () => {
  return (
    <div
      className="group/phone mx-auto block max-w-xs space-y-3 rounded-lg bg-white p-6 shadow-lg ring-1 ring-slate-900/5 hover:bg-sky-500 hover:ring-sky-500"
      title="use group to hover child element in block"
    >
      <div className="flex items-center space-x-3">
        <FolderIcon />
        <h3 className="text-sm font-semibold text-slate-900 group-hover/phone:text-white">
          New project
        </h3>
      </div>
      <p className="text-sm text-slate-500 group-hover/phone:text-white">
        Create a new project from a variety of starting templates.
      </p>

      <div className="group-box bg-red-200">
        <div>Published 01</div>
        <p>Published 02</p>
        <h2>Published 03</h2>
      </div>
    </div>
  );
};
