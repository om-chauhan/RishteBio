import { useState, useEffect, useRef } from 'react';

interface UsePreviewScaleReturn {
    previewScale: number;
    isMounted: boolean;
    previewContainerRef: React.RefObject<HTMLDivElement>;
}

export const usePreviewScale = (mobileView: 'editor' | 'preview'): UsePreviewScaleReturn => {
    const [previewScale, setPreviewScale] = useState(1);
    const [isMounted, setIsMounted] = useState(false);
    const previewContainerRef = useRef<HTMLDivElement>(null);

    // Handle mount animation
    useEffect(() => {
        setTimeout(() => setIsMounted(true), 100);
    }, []);

    // Handle resize for preview scale
    useEffect(() => {
        const calculateScale = () => {
            if (previewContainerRef.current) {
                const containerWidth = previewContainerRef.current.clientWidth;
                const A4_WIDTH_PX = 794; // 210mm in pixels at 96 DPI
                const padding = 32; // 2rem padding
                const availableWidth = containerWidth - padding;

                let newScale = availableWidth / A4_WIDTH_PX;

                // Clamp scale to reasonable limits
                if (newScale > 1.2) newScale = 1.2;
                if (newScale < 0.3) newScale = 0.3;

                setPreviewScale(newScale);
            }
        };

        calculateScale();

        const observer = new ResizeObserver(calculateScale);
        if (previewContainerRef.current) {
            observer.observe(previewContainerRef.current);
        }

        window.addEventListener('resize', calculateScale);

        return () => {
            window.removeEventListener('resize', calculateScale);
            observer.disconnect();
        };
    }, [mobileView]);

    return {
        previewScale,
        isMounted,
        previewContainerRef
    };
};

export default usePreviewScale;
