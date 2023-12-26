import Layout from '../Layout/Layout'
import { editor1 } from '../../mock'
import { EditorContext } from '../../context/editorContext'
import { useMemo, useState } from 'react'
import { Provider } from 'react-redux'
import {store} from '../../redux/store'

const App = () => {
  const [editor, setEditor] = useState(editor1)
  const context = useMemo(() => ({ editor, setEditor }), [editor])
  return (
    <Provider store={store}>
      <EditorContext.Provider value={context}>
        <Layout />
      </EditorContext.Provider>
    </Provider>
  )
}

export default App
