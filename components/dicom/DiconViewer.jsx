'use client'
import React, { useRef } from 'react';
import { useViewport } from '@lunit/insight-viewer/viewport';
import InsightViewer, { useImage, useInteraction } from '@lunit/insight-viewer';


const DiconViewer = ({ imageUrl }) => {

    const viewerRef = useRef(null);
    const { image } = useImage({ wadouri: imageUrl });
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
            <div ref={viewerRef} style={{ width: '100%', height: '510px' }}>
                <InsightViewer {...viewerProps} />
            </div>
        </>
    );
};

export default DiconViewer;