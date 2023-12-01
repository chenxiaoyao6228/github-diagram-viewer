import plantumlEncoder from 'plantuml-encoder'
import { useEffect, useState } from 'react';
import './index.css';

function PumlRenderer(props) {

  const { url } = props;

  const [previewUrl, setPreviewUrl] = useState(null);

  useEffect(() => {
    fetch(url)
      .then(response => response.text())
      .then(data => {
        const encoded = plantumlEncoder.encode(data);
        const url = `https://www.plantuml.com/plantuml/svg/${encoded}`;
        setPreviewUrl(url);
      })
      .catch(error => {
        console.error('Error fetching JSON:', error);
      });
  }, [url])


  if (!previewUrl) {
    return <div>Loading...</div>;
  }



  return (
    <div className="puml-wrap">
      <iframe
        title="xx"
        src={previewUrl}
        width="100%"
        height="100%"
        frameBorder="0"
        allowFullScreen
      />
    </div>
  );
}

export default PumlRenderer;
