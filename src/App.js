import {getUrlFromQuery, getFileTypeFromUrl }from './utils';
import  PumlRenderer  from './components/PumlRenderer';
import  ExcalidrawRenderer  from './components/ExcalidrawRenderer';
import './App.css';

function App() {

 const url = getUrlFromQuery();
  
  if (!url) {
    return <div>No URL found</div>;
  }

  const fileType = getFileTypeFromUrl(url);

 switch (fileType) {
    case 'puml':
      return <PumlRenderer url={url}/>;
    case 'excalidraw':
      return <ExcalidrawRenderer url={url}/>;
    default:
      return <div>Unsupported file type</div>;
  }
}

export default App;
