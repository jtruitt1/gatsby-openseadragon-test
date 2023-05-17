import * as React from 'react';

async function fetchAsync(url) {
  let response = await fetch(url);
  return response;
}

const Viewer = () => {

  // Create a ref for the viewer.
  const viewerRef = React.useRef(null);

  // When the component mounts, check if window and document are available. If they aren't,
  // then we can't render the viewer.
  // If they are available, the OpenSeaDragon viewer will be lazy loaded, and instantiated.
  React.useEffect(() => {
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      import('openseadragon').then(OpenSeaDragon => {

        // Set the tile sources.
        const tileSources = [
          "https://digitalcollections-staging.tricolib.brynmawr.edu/cantaloupe/iiif/2/https%3A%2F%2Fdigitalcollections-staging.tricolib.brynmawr.edu%2F_flysystem%2Ffedora%2F2022-06%2F160-Service%2520File.jpg/info.json"
        ];
        // Create the viewer.
        const viewer = new OpenSeaDragon.default({
          element: viewerRef.current,
          sequenceMode: true,
          tileSources: tileSources,
          showNavigator: true,
          prefixUrl: 'https://github.swarthmore.edu/pages/jtruitt1/gatsby-openseadragon/public/',
          // crossOriginPolicy: 'Anonymous',
          ajaxHeaders: { 'Authorization': 'Any value works, apparently' }
        });
      });
    }
  }, []);

  return (
    <div
      id="openseadragon"
      ref={viewerRef}
      style={{ height: 600, width: '100%' }}
    />
  );
}

export default Viewer;
