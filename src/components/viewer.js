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

        // Get manifest URL
        const pageManifestUrl = encodeURI("https://web.tricolib.brynmawr.edu/digitalcollections/node/334752/page-manifest")
        const getPageManifest = async (url) => {
          const response = await fetch(url)
          let pageManifest = await response.json()
          return pageManifest
        };
        const pageManifest = getPageManifest(pageManifestUrl)
        const manifestUrl = pageManifest.sequences[0].canvases[0].images[0].resource.service['@id']

        // Set the tile sources.
        const tileSources = [
          encodeURI(manifestUrl)
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
