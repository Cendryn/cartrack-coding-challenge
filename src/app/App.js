import React, { useEffect, useState } from 'react';

import Search from './components/Search/Search.jsx';
import Table from './components/Table/Table.jsx';

import './App.css';

const columns = [
  {
    name: 'Name',
    accessor: 'name',
  },
  {
    name: 'Username',
    accessor: 'username',
  },
  {
    name: 'Email',
    accessor: 'email',
  },
  {
    name: 'Contact Number',
    accessor: 'phone',
  },
];


const App = () => {
  const [data, setData] = useState({ initialData: [], filteredData: [] });
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    setIsFetching(true);
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        else {
          return [];
        }
      })
      .then((data) => {
        setData({ initialData: data, filteredData: data });
        setIsFetching(false);
      })
      .catch(error => {
        console.log(error);
        setIsFetching(false);
      });
  }, []);

  const handleSearch = (text) => {
    const searchText = text.trim().toLowerCase();

    const filteredData = data.initialData.filter(item => item.name.trim().toLowerCase().includes(searchText) || item.email.trim().toLowerCase().includes(searchText))
    
    setData({ ...data, filteredData });
  }
  
  return (
    <main>
      <header>
        <h1>User List</h1>
      </header>
      <Search onSearch={handleSearch} />
      <Table
        columns={columns}
        data={data}
        isFetching={isFetching}
        hasSearch
      />
    </main>
  );
}

export default App;