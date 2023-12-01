import { FunctionComponent } from 'react';
import { Snippet } from '../Code';
import * as css from '../Code.module.css';
import Editor, { Language } from '../editor/Editor';

type Props = {
    snippet: Snippet;
    setSnippet: (snippet: Snippet) => void;
};

const MultiLayout: FunctionComponent<Props> = ({ snippet, setSnippet }) => {
    const availableLanguages = Object.keys(snippet) as Language[];

    const onEditorChange = (value: string, language: Language) => {
        setSnippet({
            ...snippet,
            [language]: value,
        });
    };

    return (
        <>
            {availableLanguages.map((language) => (
                <>
                    <button key={language} className={css.tabButton}>
                        {language}
                    </button>
                    <section className={css.tabPanel}>
                        <Editor
                            code={snippet[language]!}
                            language={language}
                            onChange={onEditorChange}
                        />
                    </section>
                </>
            ))}
        </>
    );
};

export default MultiLayout;
