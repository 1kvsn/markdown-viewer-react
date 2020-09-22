import React, { useState } from 'react';
import './App.css';
import Markdown from 'react-markdown';

import { initialSource } from './sample';

function App() {

  const [markdownSrc, setMarkdownSrc] = useState(initialSource);

  function handleMarkdownChange({ target: { value } }) {
    console.log(value)
    setMarkdownSrc(value)
  }

  return (
    <div className="demo">
      <h1 className="page-header">Markdown Viewer</h1>
      <div className="editor-pane">
        <textarea value={markdownSrc} onChange={handleMarkdownChange} />
      </div>

      <div className="result-pane">
        <Markdown
          className="result"
          source={markdownSrc}
          skipHtml={false}
          escapeHtml={false}
          // plugins={[toc]}
        />
      </div>
    </div>
  );
}

export default App;
