import Layout from '../Layout/Layout'
import { editor1 } from '../../mock'
import { EditorContext } from '../../context/editorContext'
import { useMemo, useState } from 'react'

const App = () => {
  const [editor, setEditor] = useState(editor1)
  const context = useMemo(() => ({ editor, setEditor }), [editor])
  return (
    <EditorContext.Provider value={context}>
      <Layout />
    </EditorContext.Provider>
  )
}

export default App
