import React, { useState, useEffect } from 'react';
import './App.css';


function App() {
  const [data, setData] = useState([]);
  const proxyUrl = 'https://cors-anywhere.herokuapp.com/',
    flickrUrl = 'https://api.flickr.com/services/feeds/photos_public.gne?tags=space&tagmode=all&format=json&nojsoncallback=true'

  useEffect(() => {
    fetchData();
  }, )

  async function fetchData() {
    let response = await fetch(proxyUrl + flickrUrl)
    response = await response.json()
    setData(response.items)
  }


  return (
    <main className="card">
      {data.map((item) =>
        <article className="box">
          <div dangerouslySetInnerHTML={{
            __html: item.description
          }}>
          </div>
         <div>
        <p>Tags: <b>{item.tags}</b></p>
           </div> 
        
        </article>
      )}
      {console.log(data)}


    </main>
  );
}

export default App;
