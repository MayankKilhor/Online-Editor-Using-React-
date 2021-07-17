import React from 'react';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';
import { Controlled } from 'react-codemirror2';

export default function CodeEditor(props){
    const {
        displayName,
        language,
        value,
        theme,
        onChange
    } = props   //These are props which were passed to each CodeEditor Component in App.js to help us to toggle the theme and use all 3 laguages
    function handleChange(editor , data , value){
        onChange(value)
    }   //With the help of this function we are handling change in LiveView whenever User do a change in Editor component. 
  return (

    <div className="Editor-Box">
        <div className="stylescoloumnTitle">
                    {displayName}
        </div>
    <Controlled 
        value = {value} 
        onBeforeChange = {handleChange}
        className="Mirror-Editor"
        options = {{
            mode: language,
            theme: theme,
            lineNumbers: true,
            lineWrapping: true,
            lint: true
        }} 
    />          
    {/* we imported Controlled component from React-codemirror to connect the the user code with codeMirror code editor and to implement his part. */}
    </div>
  );
}
