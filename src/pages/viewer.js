import * as React from 'react';
import Layout from '../components/layout';
import Viewer from '../components/viewer';

const ViewerPage = ({data}) => {
    return (
        <Layout pageTitle="OpenSeaDragon Viewer">
            <Viewer />
        </Layout>
    );
}

export default ViewerPage;