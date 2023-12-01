import { FunctionComponent, useState } from 'react';
import { Snippet } from '../Code';
import * as css from '../Code.module.css';
import Editor, { Language } from '../editor/Editor';

type Props = {
    snippet: Snippet;
    setSnippet: (snippet: Snippet) => void;
    defaultLanguage: Language;
};

const TabLayout: FunctionComponent<Props> = ({ snippet, setSnippet, defaultLanguage }) => {
    const availableLanguages = Object.keys(snippet) as Language[];
    const [activeLanguage, setActiveLanguage] = useState<Language>(defaultLanguage);

    const onTabButtonClick = (language: Language) => () => {
        setActiveLanguage(language);
    };

    const onEditorChange = (value: string, language: Language) => {
        setSnippet({
            ...snippet,
            [language]: value,
        });
    };

    return (
        <>
            <div role="tablist" className={css.tabButtons}>
                {availableLanguages.map((language) => (
                    <button
                        key={language}
                        className={css.tabButton}
                        role="tab"
                        aria-selected={activeLanguage === language}
                        onClick={onTabButtonClick(language)}
                    >
                        {language}
                    </button>
                ))}
            </div>
            <section role="tabpanel" className={css.tabPanel}>
                <Editor
                    code={snippet[activeLanguage]!}
                    language={activeLanguage}
                    onChange={onEditorChange}
                />
            </section>
        </>
    );
};

export default TabLayout;
