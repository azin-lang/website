import { marked } from 'marked';
import hljs from 'highlight.js/lib/core';
import bash from 'highlight.js/lib/languages/bash';
import cpp from 'highlight.js/lib/languages/cpp';
import css from 'highlight.js/lib/languages/css';
import javascript from 'highlight.js/lib/languages/javascript';
import json from 'highlight.js/lib/languages/json';
import markdown from 'highlight.js/lib/languages/markdown';
import plaintext from 'highlight.js/lib/languages/plaintext';
import python from 'highlight.js/lib/languages/python';
import typescript from 'highlight.js/lib/languages/typescript';
import xml from 'highlight.js/lib/languages/xml';

hljs.registerLanguage('bash', bash);
hljs.registerLanguage('sh', bash);
hljs.registerLanguage('cpp', cpp);
hljs.registerLanguage('c++', cpp);
hljs.registerLanguage('css', css);
hljs.registerLanguage('html', xml);
hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('js', javascript);
hljs.registerLanguage('json', json);
hljs.registerLanguage('markdown', markdown);
hljs.registerLanguage('md', markdown);
hljs.registerLanguage('plaintext', plaintext);
hljs.registerLanguage('text', plaintext);
hljs.registerLanguage('python', python);
hljs.registerLanguage('py', python);
hljs.registerLanguage('typescript', typescript);
hljs.registerLanguage('ts', typescript);
hljs.registerLanguage('xml', xml);

const renderer = new marked.Renderer();

renderer.code = ({ text, lang }) => {
	const language = (lang || '').trim().toLowerCase();
	const validLanguage = language && hljs.getLanguage(language) ? language : undefined;
	const highlighted = validLanguage
		? hljs.highlight(text, { language: validLanguage }).value
		: hljs.highlightAuto(text).value;
	const className = validLanguage ? `hljs language-${validLanguage}` : 'hljs';

	return `<pre><code class="${className}">${highlighted}</code></pre>`;
};

marked.setOptions({
	breaks: true,
	gfm: true,
	renderer
});

export function renderMarkdown(content: string) {
	return marked.parse(content) as string;
}
