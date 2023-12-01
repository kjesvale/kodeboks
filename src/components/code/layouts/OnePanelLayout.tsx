import { useState } from 'react';
import { Snippet } from '../Code';
import css from '../Code.module.css';
import Editor, { Language } from '../editor/Editor';
import Output from '../output/Output';

type Props = {
    snippet: Snippet;
    setSnippet: (snippet: Snippet) => void;
    defaultLanguage: Language;
};

type Tab = Language | 'output';

const OnePanelLayout = ({ snippet, setSnippet, defaultLanguage }: Props) => {
    const availableLanguages = Object.keys(snippet) as Language[];
    const [activeTab, setActiveTab] = useState<Tab>(defaultLanguage);

    const onTabButtonClick = (language: Tab) => () => {
        setActiveTab(language);
    };

    const onEditorChange = (value: string, language: Language) => {
        setSnippet({
            ...snippet,
            [language]: value,
        });
    };

    return (
        <div className={css.panel + ' ' + css.rightPanel}>
            <div role="tablist" className={css.tabButtons}>
                {availableLanguages.map((language) => (
                    <button
                        key={language}
                        className={css.tabButton}
                        role="tab"
                        aria-selected={activeTab === language}
                        onClick={onTabButtonClick(language)}
                    >
                        {language}
                    </button>
                ))}
                <button
                    aria-selected={activeTab === 'output'}
                    className={css.tabButton}
                    role="tab"
                    onClick={onTabButtonClick('output')}
                >
                    Resultat
                </button>
            </div>
            <section role="tabpanel" className={css.tabPanel}>
                {activeTab === 'output' ? (
                    <Output snippet={snippet} />
                ) : (
                    <Editor
                        code={snippet[activeTab]!}
                        language={activeTab}
                        onChange={onEditorChange}
                    />
                )}
            </section>
        </div>
    );
};

export default OnePanelLayout;
