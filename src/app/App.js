import React, { useEffect, useState } from 'react';

const App = () => {
  const [data, setData] = useState({ initialData: [], filteredData: [] });
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    setIsFetching(true);
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setData({ initialData: data, filteredData: data });
        setIsFetching(false);
      });
  }, []);
  
  return (
    <main>APP</main>
  );
}

export default App;