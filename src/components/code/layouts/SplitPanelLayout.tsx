import Draggable from '../../draggable/Draggable';
import { Snippet } from '../Code';
import css from '../Code.module.css';
import { Language } from '../editor/Editor';
import Output from '../output/Output';
import MultiLayout from './MultiLayout';
import TabLayout from './TabLayout';

export type SplitLayout = 'multi' | 'tabs';

type Props = {
    snippet: Snippet;
    setSnippet: (snippet: Snippet) => void;
    defaultLanguage: Language;
    layout?: SplitLayout;
    height?: number;
};

const SplitPanelLayout = ({ snippet, setSnippet, defaultLanguage, layout, height }: Props) => {
    return (
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
    );
};

export default SplitPanelLayout;
