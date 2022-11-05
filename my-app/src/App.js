import { useEffect, useState } from 'react';
import Card from './components/Card/Card';
import './App.css';

function App() {
  const [data, setData] = useState();
  const [filter, setFilter] = useState();
  const filterString = window.location.search.replace(/[^a-z ]/ig, '');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/?_start=0&_limit=7')
    .then((response) => response.json())
    .then((data) => {
      if(window.location.search){
        setData(data?.filter(el=> el.title.includes(filterString)));
    }else setData(data)})
      }, [filter]);
  
  const submitHandler = (e) => {
    e.preventDefault();
    window.history.pushState({}, '', `${window.location.pathname}?${e.target[0].value}`)
    setFilter(e.target[0].value)
      };

  return (
    <form onSubmit={submitHandler}>
      <div className='input'>
        <input 
        defaultValue={filterString && filterString}
        placeholder='Найти...'
        />
        <button 
        type='submit'>Поиск</button>
      </div>
    <div className='card'>
      {data?.map(el => {
        return(
          <Card key={el.id} title={el.title} body={el.body}/>
        )
      })}
      </div>
    </form>
  );
};

export default App;
