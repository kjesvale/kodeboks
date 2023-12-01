import { ArrowsCirclepathIcon, SidebarLeftIcon } from '@navikt/aksel-icons';
import { FunctionComponent, ReactNode, useState } from 'react';
import * as css from './Code.module.css';
import { Language } from './editor/Editor';
import OnePanelLayout from './layouts/OnePanelLayout';
import SplitPanelLayout, { SplitLayout } from './layouts/SplitPanelLayout';

export type Snippet = Partial<Record<Language, string>>;

export type Props = {
    snippet: Snippet;
    layout?: SplitLayout;
    defaultLanguage?: Language;
    height?: number;
    tittel?: string;
};

const Code: FunctionComponent<Props> = ({
    layout = 'tabs',
    defaultLanguage = 'html',
    height,
    tittel,
    ...props
}) => {
    const [snippet, setSnippet] = useState<Snippet>(props.snippet);
    const [splitLayout, setSplitLayout] = useState<boolean>(window.innerWidth > 800);

    const onResetClick = () => {
        setSnippet(props.snippet);
    };

    const onChangeLayoutClick = () => {
        setSplitLayout(!splitLayout);
    };

    return (
        <div className={css.wrapper + ' ' + css.fullscreen}>
            <header className={css.header}>
                <h2>{tittel ?? 'CODE'}</h2>
                <ActionButton
                    title="Toggle split layout"
                    onClick={onChangeLayoutClick}
                    icon={<SidebarLeftIcon />}
                />
                <ActionButton
                    title="Reset changes"
                    onClick={onResetClick}
                    icon={<ArrowsCirclepathIcon />}
                />
            </header>
            {splitLayout ? (
                <SplitPanelLayout
                    snippet={snippet}
                    setSnippet={setSnippet}
                    defaultLanguage={defaultLanguage}
                    layout={layout}
                    height={height}
                />
            ) : (
                <OnePanelLayout
                    snippet={snippet}
                    setSnippet={setSnippet}
                    defaultLanguage={defaultLanguage}
                />
            )}
        </div>
    );
};

type ActionButtonProps = {
    title: string;
    icon: ReactNode;
    onClick: () => void;
};

const ActionButton: FunctionComponent<ActionButtonProps> = ({ title, icon, onClick }) => (
    <button title={title} aria-label={title} className={css.actionButton} onClick={onClick}>
        {icon}
    </button>
);

export default Code;
