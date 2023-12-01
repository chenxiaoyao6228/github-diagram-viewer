import { memo, useEffect, useState } from 'react';
import { Excalidraw } from "@excalidraw/excalidraw";
import './index.css';

const  ExcalidrawRenderer = memo((props) =>{

  const { url } = props;

  const [excalidrawData, setExcalidrawData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setExcalidrawData(data)
      })
      .catch(error => {
        console.error('Error fetching JSON:', error);
      });

  }, [url])


  if(!url) {
    return null
  }

  if (!excalidrawData) {
    return <div>Loading...</div>;
  }

  console.log("excalidrawData", excalidrawData);

  return (
    <div className="excalidraw-wrap">
       <Excalidraw initialData={excalidrawData} />
    </div>
  );
})

export default ExcalidrawRenderer;
