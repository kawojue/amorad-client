'use client'
import React, { useRef } from 'react';
import InsightViewer, { useImage, useInteraction } from '@lunit/insight-viewer';
import { useViewport } from '@lunit/insight-viewer/viewport';

const MOCK_IMAGE = [
    'wadouri:https://static.lunit.io/fixtures/dcm-files/series/CT000001.dcm',
    'wadouri:https://static.lunit.io/fixtures/dcm-files/series/CT000002.dcm',
    'wadouri:https://static.lunit.io/fixtures/dcm-files/series/CT000002.dcm'
];

const DiconViewer = () => {
    const viewerRef = useRef(null);
    const { image } = useImage({ wadouri: MOCK_IMAGE });
    const { interaction, setInteraction } = useInteraction({
        mouseWheel: 'scale',
        primaryDrag: 'pan',
    });
    const { viewport, setViewport, resetViewport } = useViewport({ image, viewerRef });

    const controllers = {
        pan: () => {
            setInteraction((prev) => ({ ...prev, primaryDrag: 'pan' }));
        },
        reset: () => {
            resetViewport();
        },
        adjust: () => {
            setInteraction((prev) => ({ ...prev, primaryDrag: 'adjust' }));
        },
    };

    const viewerProps = {
        image,
        viewerRef,
        viewport,
        interaction,
        onViewportChange: setViewport,
    };

    return (
        <>
            <button style={{ marginRight: '8px' }} onClick={controllers.pan}>
                Pan
            </button>
            <button style={{ marginRight: '8px' }} onClick={controllers.adjust}>
                Adjust
            </button>
            <button onClick={controllers.reset}>Reset</button>
            <div ref={viewerRef} style={{ width: '100%', height: '500px' }}>
                <InsightViewer {...viewerProps} />
            </div>
        </>
    );
};

export default DiconViewer;
