import './App.css';
import React, { useState ,useEffect } from 'react';
import CodeEditor from './components/CodeEditor'; //Codeeditor was
import LocalStorage from './hooks/LocalStorage';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css';


function App() {
  // we have used LocalStorge component here instead of useState to store the user code in local storage so whenever we reload the application we won't have to type the previous code again.
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
  // The above timeout is to do changes in LiveView after 250ms of the time when user stop typing in any of the three component.
  const [ darkMode, setDarkMode ] = useState(false)
   
  const [themeMode, setThemeMode] = useState("material");
  // With the help of hooks I have created a Theme toggler also in my code so above code is setting the default state to be material and setting darkmode to be default
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
      {/* I have created two divs: Editor and LiveView. Editor div is containing all three CodeEditor while LiveView div is implementing the output of user code present in the CodeEditor Components.  */}
      <div className="Editor">
      {/* With the help of Tab Panel User was easily able to switch to other code editor and dynamically changing the output also. */}
      <Tabs className="styleseditorName">
        <TabList className="tabs">
            <Tab className="stylestab">Index.html</Tab>
            <Tab className="stylestab">Index.css</Tab>
            <Tab className="stylestab">Index.js</Tab>
            <div className="Toggletheme" id="toggle" onClick={() => darkMode === false ? (setDarkMode(true), setThemeMode('base16-light'))  : (setDarkMode(false), setThemeMode('material'))}><div className="toggle-inner"/></div>
        </TabList>
        <TabPanel className="stylescode">
          {/* This is the First CodeEditor component(Index.html) or HTML code editor */}
          <CodeEditor displayName="HTML" language="xml" value={html} theme={themeMode} onChange={useHTML} />
         
        </TabPanel>
        <TabPanel className="stylescode">
          {/* This is the Second CodeEditor component(Index.css) or CSS code editor */}
          <CodeEditor displayName="CSS" language="css" value={css} theme={themeMode} onChange={useCSS}/>
        
        </TabPanel>
        <TabPanel className="stylescode">
          {/* This is the Third CodeEditor component(Index.js) or Javascript code editor */}
          <CodeEditor displayName="JAVASCRPIT" language="js" value={js} theme={themeMode} onChange={useJS} />
        
        </TabPanel>
      </Tabs>
    </div>
    
      <div className="LiveView">
        {/* In this Live view we are dynamically rendering output of above code editors */}
        <iframe srcDoc={renderView} title="live" sandbox="allow-scripts" width ="100%" frameBorder="0" height="100%"></iframe>
      </div>
    </div>
  );
}

export default App;
