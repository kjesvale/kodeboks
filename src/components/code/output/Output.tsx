import { FunctionComponent, useRef, useState } from 'react';
import { useDebouncedEffect } from '../../../hooks/useDebouncedEffect';
import { Snippet } from '../Code';
import * as css from './Output.module.css';

type Props = {
    snippet: Snippet;
};

const Output: FunctionComponent<Props> = ({ snippet }) => {
    const [document, setDocument] = useState<string>(buildDocument(snippet));
    const ref = useRef<HTMLIFrameElement>(null);

    useDebouncedEffect(
        () => {
            setDocument(buildDocument(snippet));
        },
        [JSON.stringify(snippet)],
        300
    );

    return (
        <div className={css.output}>
            <iframe
                ref={ref}
                width="100%"
                height="100%"
                title="output"
                loading="lazy"
                srcDoc={document}
            />
        </div>
    );
};

const buildDocument = (snippet: Snippet) => {
    const { html, css } = snippet;

    return `
        <!DOCTYPE html>
        <html lang="no">
            <head>
                <meta charset="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
                <title>Document</title>
                <style>
                    ${baseCss}
                    ${css}
                </style>
            </head>
            <body>
                ${html}
            </body>
        </html>
    `;
};

const baseCss = `
h1, h2, h3, h4, h5, h6 {
    font-family: Helvetica, sans-serif;
}
body, button {
    font-family: Helvetica, sans-serif;
}
`;

export default Output;
