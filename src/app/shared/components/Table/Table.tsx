import './Table.module.scss';

import { formatTitleCase } from '@app-shared/utils';

type Props<T> = Readonly<{
  headers: string[];
  data: T[];
  caption?: string;
}>;

export function Table<T extends object>({ headers, data, caption }: Props<T>) {
  return (
    <div className="block max-w-full overflow-x-auto">
      <table role="table" className="w-full border-collapse bg-slate-400">
        {caption && (
          <caption role="caption" className="mb-4 text-left">
            {caption}
          </caption>
        )}

        <thead className="bg-slate-100">
          <tr role="row">
            {headers.map((header, index) => (
              <th className="hidden p-4 text-left md:table-cell" key={`${header}-${index}`}>
                {header}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.map((tableData, index) => {
            const rowId = `${index}-${Math.random()}`;
            const entries = Object.entries(tableData).map(([key, value]) => (
              <td
                key={`${key}-${value}`}
                className="grid grid-cols-2 p-4 md:table-cell"
                data-cell={formatTitleCase(key)}
              >
                {value}
              </td>
            ));

            return (
              <tr role="row" key={rowId}>
                {entries}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
