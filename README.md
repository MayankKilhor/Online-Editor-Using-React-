# Online Editor Using React(Dyte)
 Building an Online Editor with the help of ReactJS and NodeJS

<img src="https://github.com/TheRoryWillAim/Online-Editor-Using-React-Dyte-/blob/main/screen%20record.gif" >

Steps to run the current repository :

### `cd my_editor`

Opens the directory containing react app.

### `npm install codemirror react-codemirror2 react-tabs `

Install the respective libraries :-
    codemirror - It's the online editor we will be using to make our react application.

    react-codemirror2 - With the help of this library our react application will be able to interact with codemirror code editor to implement our HTMl, CSS and JS code.

    react-tabs - This Library is used to implement one CodeEditor component screen at a time and helping us to make our file explorer so we can easily switch between our 3 CodeEditor components(3 main files)

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Basic Architecture
Our Webpage includes of 2 div element. First one containing 3 CodeEditor Components(respective to each language) with one toggle button to switch between dark and light theme. Second div is containing iframe of LiveView which is doing changes after every 250ms when the user stops typing in the CodeEditor component(Using useEffect).

## Components
We made CodeEditor component for each language with the help of codemirror and react-codemirro2 library to implement the code present in each component and present the output on LiveView div. 

With the help of hooks we even made toggle theme and LocalStorage.js . LocalStorage component help us to store our code in local storage so whenever user reloads the screen user's previous code will still be present in the CodeEditor component.

## Security
        
In iframe element we use the line " sandbox="allow-scripts" " which helps us to maintain security in our react application as it only allows us to present the scrpits available in CodeEditor component while blocking the cookies or any malicious code to be implemented in our React Application.

### All the requested requirements were fulfilled in my React application following the 5 main rules given by the Organization. Online Editor made with React by `Mayank Kilhor(18BCI0136)`