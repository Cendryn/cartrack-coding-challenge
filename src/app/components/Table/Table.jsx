import React from 'react';

import './Table.css';

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
    const { filteredData, initialData } = data;

    // show text in place of loader
    if (isFetching) {
      return (
        <tbody>
          <tr>
            <td colSpan={columns.length} className="fetching-result">
              Fetching data...
            </td>
          </tr>
        </tbody>
      );
    }

    // show empty list
    if (!filteredData.length || !initialData.length) {
      return (
        <tbody>
          <tr>
            <td colSpan={columns.length} className="empty-result">
              {!initialData.length ? 'No data found. Please add some.' : 'No data found. Please use different search parameters.'}
            </td>
          </tr>
        </tbody>
      );
    }

    return (
      <tbody>
        {
          filteredData.map((item) => {
            return (
              <tr key={item.id}>
                {
                  columns.map(col => (
                    <td key={item.id + col.accessor}>
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
    <div className="table-container">
      <table>
        <TableHeader />
        <TableBody />
      </table>  
    </div>
  );
}

export default Table;
