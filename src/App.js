import React, {useState} from 'react'
import DetailJob from './components/DetailJob';
import Home from './components/Home';
import { JobsContextProvider } from './components/context/JobsContext';

function App() {

  const [ showdetail, setShowDetail ] = useState(false)  

  return (
    <div className="App">
      <JobsContextProvider>

      { !showdetail ?
        <Home 
          setShowDetail = {setShowDetail}
        />
      : <DetailJob
        setShowDetail = {setShowDetail}
      />
      }
      </JobsContextProvider>
    </div>  
  );
}

export default App;
  