import * as React from 'react';

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
          encodeURI("https://digitalcollections.tricolib.brynmawr.edu/node/334751/manifest")
        ];
        // Create the viewer.
        const viewer = new OpenSeaDragon.default({
          element: viewerRef.current,
          sequenceMode: true,
          tileSources: tileSources,
          showNavigator: true,
          prefixUrl: 'https://github.swarthmore.edu/pages/jtruitt1/gatsby-openseadragon/'
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
