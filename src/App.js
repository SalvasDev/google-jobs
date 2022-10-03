import React, {useState} from 'react'
import DetailJob from './components/DetailJob';
import Home from './components/Home';
import { JobsContextProvider } from './components/context/JobsContext';
import { IdContextProvider } from './components/context/IdContext';
import { PagesContextProvider } from './components/context/PagesContext';

function App() {

  const [ showdetail, setShowDetail ] = useState(false)  

  function handleForce(){
   window.location.reload()
}

  return (
    <div className="App">
      <JobsContextProvider>
        <IdContextProvider> 
          <PagesContextProvider>

      { !showdetail ?
        <Home 
          setShowDetail = {setShowDetail}
          handleForce = {handleForce}          
        />
      : <DetailJob
        setShowDetail = {setShowDetail}
        handleForce = {handleForce}
      />
      }
          </PagesContextProvider>
        </IdContextProvider>
      </JobsContextProvider>
    </div>  
  );
}

export default App;
  