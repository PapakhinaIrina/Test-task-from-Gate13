import { useEffect, useState } from 'react';
import Card from './components/Card/Card';
import './App.css';


function App() {
  const [data, setData] = useState();

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/?_start=0&_limit=7')
    .then((response) => response.json())
    .then((data) => setData(data))
      }, [])

  return (
    <div>
    <div className='card'>
      {data?.map(el => {
        return(
          <Card key={el.id} title={el.title} body={el.body}/>
        )
      })}
      </div>
    </div>
  );
}

export default App;
