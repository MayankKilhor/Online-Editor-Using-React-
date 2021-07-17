import './App.css';
import React, { useState ,useEffect } from 'react';
import CodeEditor from './components/CodeEditor'; //Codeeditor was
import LocalStorage from './hooks/LocalStorage';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css';


function App() {
  
  const [html, useHTML] = LocalStorage('html', '')
  const [css, useCSS] = LocalStorage('css', '')
  const [js, useJS] = LocalStorage('js', '')
  const [renderView, setrenderView] = useState('')
  useEffect(() => {
    const timeout = setTimeout(() => {
      setrenderView(`
        <html>
          <body>${html}</body>
          <style>${css}</style>
          <script>${js}</script>
        </html>
      `)
    }, 250)

    return () => clearTimeout(timeout)
  }, [html, css, js])
  const [ darkMode, setDarkMode ] = useState(false)
   
  const [themeMode, setThemeMode] = useState(
     "material"
  );
  React.useEffect(() => {
    const body = document.body
    const toggle = document.querySelector('.toggle-inner')
    
    // If dark mode is enabled - adds classes to update dark-mode styling.
    // Else, removes and styling is as normal.
    if( darkMode === true ) {
      body.classList.add('dark-mode')
      toggle.classList.add('toggle-active')
    } else {
      body.classList.remove('dark-mode')
      toggle.classList.remove('toggle-active')
    }
  }, [darkMode])

  return (
    <div className="dyte">
      <div className="Editor">
      
      <Tabs className="styleseditorName">
        <TabList className="tabs">
            <Tab className="stylestab">Index.html</Tab>
            <Tab className="stylestab">Index.css</Tab>
            <Tab className="stylestab">Index.js</Tab>
            <div className="Toggletheme" id="toggle" onClick={() => darkMode === false ? (setDarkMode(true), setThemeMode('base16-light'))  : (setDarkMode(false), setThemeMode('material'))}><div className="toggle-inner"/></div>
        </TabList>
        <TabPanel className="stylescode">
        
          <CodeEditor displayName="HTML" language="xml" value={html} theme={themeMode} onChange={useHTML} />
         
        </TabPanel>
        <TabPanel className="stylescode">
        
          <CodeEditor displayName="CSS" language="css" value={css} theme={themeMode} onChange={useCSS}/>
        
        </TabPanel>
        <TabPanel className="stylescode">
        
          <CodeEditor displayName="JAVASCRPIT" language="js" value={js} theme={themeMode} onChange={useJS} />
        
        </TabPanel>
      </Tabs>
    </div>
    
      <div className="LiveView">
        <iframe srcDoc={renderView} title="live" sandbox="allow-scripts" width ="100%" frameBorder="0" height="100%"></iframe>
      </div>
    </div>
  );
}

export default App;
