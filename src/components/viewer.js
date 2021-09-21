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
                    "https://libimages1.princeton.edu/loris/pudl0001%2F4609321%2Fs42%2F00000001.jp2/info.json",
                    "https://libimages1.princeton.edu/loris/pudl0001%2F4609321%2Fs42%2F00000002.jp2/info.json",
                ];
                // Create the viewer.
                const viewer = new OpenSeaDragon.default({
                    element: viewerRef.current,
                    sequenceMode: true,
                    tileSources: tileSources,
                    showNavigator: true,
                    prefixUrl: 'https://github.swarthmore.edu/pages/DS/gatsby-openseadragon/'
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
