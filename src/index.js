import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const fileIcon = require("./icons/file.png");
const folderIcon = require("./icons/folder.png");

const githubTempArray = [
  {
    id: 1,
    iconFile: fileIcon,
    iconFolder: folderIcon,
    commitName: "build",
    name: "folder",
    commitMessage: "close #3654, Replace es3ify with Babel ES3 transforms (#1688)",
    time: ""
  },
  {
    id: 2,
    iconFile: fileIcon,
    iconFolder: folderIcon,
    commitName: "docs",
    name: "folder",
    commitMessage: "Mention that we're observable in the API",
    time: ""
  },
  {
    id: 3,
    iconFile: fileIcon,
    iconFolder: folderIcon,
    commitName: "examples",
    name: "folder",
    commitMessage: "Update docs to use test with enzyme (#1786)",
    time: ""
  },
  {
    id: 4,
    iconFile: fileIcon,
    iconFolder: folderIcon,
    commitName: "logo",
    name: "folder",
    commitMessage: "Use Redux logo as favicon on GitBook docs (#1761)",
    time: ""
  },
  {
    id: 5,
    iconFile: fileIcon,
    iconFolder: folderIcon,
    commitName: "src",
    name: "folder",
    commitMessage: "only warn for unexpected key once (#1672)",
    time: ""
  },
  {
    id: 6,
    iconFile: fileIcon,
    iconFolder: folderIcon,
    commitName: "test",
    name: "file",
    commitMessage: "test the PostgreSQL DB to ensure secure connection (#2233)",
    time: ""
  },
  {
    id: 7,
    iconFile: fileIcon,
    iconFolder: folderIcon,
    commitName: ".babelrc",
    name: "file",
    commitMessage: "close #1687. Replace ES3lify with Babel",
    time: ""
  },
  {
    id: 8,
    iconFile: fileIcon,
    iconFolder: folderIcon,
    commitName: ".editorconfig",
    name: "file",
    commitMessage: "editor configurations: Do not edit whitespaces",
    time: ""
  },
  {
    id: 9,
    iconFile: fileIcon,
    iconFolder: folderIcon,
    commitName: ".eslintignore",
    name: "file",
    commitMessage: "ignore funny error messages",
    time: ""
  },
  {
    id: 10,
    iconFile: fileIcon,
    iconFolder: folderIcon,
    commitName: ".eslintrc",
    name: "file",
    commitMessage: "updated ESlint extension on vsCode and changed some files",
    time: ""
  },
  {
    id: 11,
    iconFile: fileIcon,
    iconFolder: folderIcon,
    commitName: ".flowconfig",
    name: "file",
    commitMessage: "Drink water and rest, let the configuration flow naturally",
    time: ""
  }
]


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App gitTempArr={githubTempArray}/>
  </React.StrictMode>
);

