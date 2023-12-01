import { FunctionComponent, ReactNode, useRef } from 'react';
import * as css from './Draggable.module.css';
import useDrag from './useDrag';

type Props = {
    left: (width: number) => ReactNode;
    right: ReactNode;
    fullscreen?: boolean;
    height?: number;
};

const Draggable: FunctionComponent<Props> = ({ left, right, height = 400, fullscreen = false }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const dividerRef = useRef<HTMLDivElement>(null);

    const { leftWidth, isDragging } = useDrag({
        containerRef,
        dividerRef,
    });

    let containerCls = css.container;
    if (isDragging) {
        containerCls += ' ' + css.isDragging;
    }

    if (fullscreen) {
        containerCls += ' ' + css.fullscreen;
    }

    return (
        <div
            className={containerCls}
            ref={containerRef}
            style={{ height: fullscreen ? undefined : height }}
        >
            {left(leftWidth)}
            <div className={css.dividerContainer} ref={dividerRef}>
                <div className={css.divider} />
            </div>
            {right}
        </div>
    );
};

export default Draggable;
