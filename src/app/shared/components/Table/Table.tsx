import { useState } from 'react';

import { Button } from '@mantine/core';
import { useReactTable, getCoreRowModel, flexRender, ColumnDef } from '@tanstack/react-table';
import clsx from 'clsx';

import styles from './Table.module.scss';

type Props<T> = {
  tableItems: T[];
  columns: ColumnDef<T, unknown>[];
};

export function Table<T>({ tableItems, columns }: Props<T>) {
  const [tableData, setTableData] = useState<T[]>(tableItems);
  const table = useReactTable<T>({
    data: tableData,
    columns,
    getCoreRowModel: getCoreRowModel()
  });

  return (
    <table className={clsx(styles['table-container'], 'horizontal-table')}>
      <thead>
        {table.getHeaderGroups().map((headerGroup, idx) => (
          <tr key={`${headerGroup.id}-${idx}`}>
            {headerGroup.headers.map((header, headIdx) => (
              <th key={`${header.id}-${headIdx}`}>
                {header.isPlaceholder
                  ? null
                  : flexRender(header.column.columnDef.header, header.getContext())}
              </th>
            ))}
          </tr>
        ))}
      </thead>

      <tbody>
        {table.getRowModel().rows.map((row, idx) => (
          <tr key={`${row.id}-${idx}`}>
            {row.getVisibleCells().map((cell, cellIdx) => (
              <td key={`${cell.id}-${cellIdx}`}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>

      <tfoot>
        {table.getFooterGroups().map((footerGroup, idx) => (
          <tr key={`${footerGroup.id}-${idx}`}>
            {footerGroup.headers.map((footer, idx) => (
              <th key={`${footer.id}-${idx}`}>
                {footer.isPlaceholder
                  ? null
                  : flexRender(footer.column.columnDef.footer, footer.getContext())}
              </th>
            ))}
          </tr>
        ))}
        <tr>
          <td>
            <Button onClick={() => setTableData([])}>Reset</Button>
          </td>
        </tr>
      </tfoot>
    </table>
  );
}
