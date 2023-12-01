import { useState, useEffect, useCallback, RefObject } from 'react';

type Options = {
    containerRef: RefObject<HTMLDivElement | null>;
    dividerRef: RefObject<HTMLDivElement | null>;
};

const useDrag = ({ containerRef, dividerRef }: Options) => {
    const [width, setWidth] = useState(0);
    const [containerRect, setContainerRect] = useState<DOMRect | null>(null);
    const [isDragging, setIsDragging] = useState<boolean>(false);

    useEffect(() => {
        const containerEl = containerRef.current;

        const computeWidth = (containerEl: HTMLDivElement) => {
            const fullWidth = containerEl.clientWidth;
            const containerRect = containerEl.getBoundingClientRect();

            setContainerRect(containerRect);
            setWidth(fullWidth / 2);
        };

        if (containerEl) {
            computeWidth(containerEl);

            const observer = new ResizeObserver((entries) => {
                computeWidth(containerEl);
            });

            observer.observe(containerEl);

            return () => {
                observer.disconnect();
            };
        }
    }, []);

    const keepDragging = useCallback(
        (event: MouseEvent) => {
            const { clientX } = event;

            if (containerRect) {
                setWidth(clientX - containerRect.left);
            }
        },
        [containerRect]
    );

    const stopDrag = useCallback(() => {
        document.removeEventListener('mousemove', keepDragging);
        document.removeEventListener('mouseup', stopDrag);

        setIsDragging(false);
    }, [keepDragging]);

    const startDrag = useCallback(() => {
        document.addEventListener('mousemove', keepDragging);
        document.addEventListener('mouseup', stopDrag);

        setIsDragging(true);
    }, [keepDragging, stopDrag]);

    useEffect(() => {
        const dividerEl = dividerRef.current;

        if (dividerEl) {
            dividerEl.addEventListener('mousedown', startDrag);
        }

        return () => {
            if (dividerEl) {
                dividerEl.removeEventListener('mousedown', startDrag);
            }
        };
    }, [startDrag]);

    let leftWidth = containerRect ? (width / containerRect.width) * 100 : 0;

    return {
        leftWidth,
        isDragging,
    };
};

export default useDrag;
