import * as React from 'react';
import mirador from "mirador";

const Mirador = () => {

  // Create a ref for the viewer.
  const viewerRef = React.useRef(null);

  // When the component mounts, check if window and document are available. If they aren't,
  // then we can't render the viewer.
  // If they are available, the OpenSeaDragon viewer will be lazy loaded, and instantiated.
  React.useEffect(() => {
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      import('mirador').then(OpenSeaDragon => {

        // Set the tile sources.
        const tileSources = [
          "https://trislandora-production.brynmawr.edu/cantaloupe/iiif/2/sc:203289~JP2~/info.json"
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
      id="mirador"
      ref={viewerRef}
      style={{ height: 600, width: '100%' }}
    />
  );
}

export default Mirador;
