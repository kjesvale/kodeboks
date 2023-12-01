import { Reset } from '@navikt/ds-icons';
import { FunctionComponent, ReactNode, useState } from 'react';
import Draggable from '../draggable/Draggable';
import * as css from './Code.module.css';
import { Language } from './editor/Editor';
import MultiLayout from './layouts/MultiLayout';
import TabLayout from './layouts/TabLayout';
import Output from './output/Output';

export type Snippet = Partial<Record<Language, string>>;
export type Layout = 'multi' | 'tabs';

export type Props = {
    snippet: Snippet;
    layout?: Layout;
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

    const onResetClick = () => {
        setSnippet(props.snippet);
    };

    let cls = css.wrapper + ' ' + css.fullscreen;

    return (
        <div className={cls}>
            <header className={css.header}>
                <h2>{tittel ?? 'CODE'}</h2>
                <ActionButton title="Reset changes" onClick={onResetClick} icon={<Reset />} />
            </header>
            <Draggable
                height={height}
                fullscreen={true}
                left={(width) => (
                    <div className={css.panel} style={{ width: `${width}%` }}>
                        {layout === 'tabs' && (
                            <TabLayout
                                snippet={snippet}
                                setSnippet={setSnippet}
                                defaultLanguage={defaultLanguage}
                            />
                        )}

                        {layout === 'multi' && (
                            <MultiLayout snippet={snippet} setSnippet={setSnippet} />
                        )}
                    </div>
                )}
                right={
                    <div className={css.panel + ' ' + css.rightPanel}>
                        <div role="tablist" className={css.tabButtons}>
                            <button aria-selected className={css.tabButton} role="tab">
                                Resultat
                            </button>
                        </div>
                        <section role="tabpanel" className={css.tabPanel}>
                            <Output snippet={snippet} />
                        </section>
                    </div>
                }
            />
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
