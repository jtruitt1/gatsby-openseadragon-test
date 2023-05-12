import * as React from 'react';

const Viewer = () => {

  // For debugging Cantaloupe server issues
  let test = fetch("https://digitalcollections.tricolib.brynmawr.edu/node/335321/manifest")

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
          "https:\/\/digitalcollections.tricolib.brynmawr.edu\/cantaloupe\/iiif\/2\/https%3A%2F%2Fdigitalcollections.tricolib.brynmawr.edu%2F_flysystem%2Ffedora%2F2023-03%2F1257_1.jp2"
        ];
        // Create the viewer.
        const viewer = new OpenSeaDragon.default({
          element: viewerRef.current,
          sequenceMode: true,
          tileSources: tileSources,
          showNavigator: true,
          prefixUrl: 'https://github.swarthmore.edu/pages/jtruitt1/gatsby-openseadragon/public/'
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
