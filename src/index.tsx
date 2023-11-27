import App from './components/App/App'
import React from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import { editor1 } from './mock'
import { EditorContext } from './context/editorContext'

const root = createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <EditorContext.Provider value={editor1}>
      <App />
    </EditorContext.Provider>
  </React.StrictMode>,
)
