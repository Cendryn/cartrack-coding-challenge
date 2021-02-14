import React from 'react';

import './Table.style.css';

const Table = ({
  columns,
  data,
  isFetching,
}) => {
  const TableHeader = () => (
    <thead>
      <tr>
        {columns.map(({ name }) => (
          <th key={name}>
            {name}
          </th>
        ))}
      </tr>
    </thead>
  );

  const TableBody = () => {
    // create loader
    if (isFetching) {
    }

    // show empty list
    if (!data.length) {
      return (
        <tbody>
        <tr>
          <td colSpan={columns.length}>
            EMPTY TABLE
          </td>
        </tr>
        </tbody>
      )
    }

    return (
      <tbody>
        {
          data.map((item) => {
            return (
              <tr key={item.id}>
                {
                  columns.map(col => (
                    <td>
                      {item[col.accessor]}
                    </td>
                  ))
                }
              </tr>
            )
          })
        }
      </tbody>
    );
  }

  return (
    <table>
      <TableHeader />
      <TableBody />
    </table>
  );
}

export default Table;
