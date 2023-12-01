import { createRoot } from 'react-dom/client';
import Code from './components/code/Code';
import snippets from './snippets';
import { code } from './utils';

const element = document.getElementById('root');
const root = createRoot(element!);

const defaultSnippet = { html: code`<h1>Hello world</h1>`, css: code`` };

const App = () => {
    const snippetId = window.location.pathname.split('/')[1];
    const snippet = snippetId ? snippets[snippetId] : defaultSnippet;

    return <Code snippet={snippet ?? defaultSnippet} />;
};

root.render(<App />);
