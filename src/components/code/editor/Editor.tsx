import Highlight, { defaultProps } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/vsDark';
import { FunctionComponent } from 'react';
import SimpleEditor from 'react-simple-code-editor';
import * as css from './Editor.module.css';

export type Language = 'html' | 'css' | 'javascript' | 'jsx' | 'tsx' | 'typescript';

type Props = {
    code: string;
    language: Language;
    onChange: (value: string, language: Language) => void;
};

const Editor: FunctionComponent<Props> = ({ code, language, onChange }) => {
    const prismLanguage = language === 'html' ? 'markup' : language;

    return (
        <SimpleEditor
            value={code}
            className={css.editor}
            onValueChange={(value: string) => onChange(value, language)}
            highlight={(code) => (
                <Highlight {...defaultProps} theme={theme} code={code} language={prismLanguage}>
                    {({ className, style, tokens, getLineProps, getTokenProps }) => (
                        <>
                            {tokens.map((line, i) => (
                                <div {...getLineProps({ line, key: i })}>
                                    {line.map((token, key) => (
                                        <span {...getTokenProps({ token, key })} />
                                    ))}
                                </div>
                            ))}
                        </>
                    )}
                </Highlight>
            )}
            style={{
                fontFamily: `"Fira Code", Consolas, monospace`,
            }}
        />
    );
};

export default Editor;
