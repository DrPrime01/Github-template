import React from 'react';
import './App.css';

function App ({gitTempArr}) {
  const structure = gitTempArr.map((file) => {
    return <div className='fileContainer' key={file.id}>
      <div className='left-contents'>
        {file.name === "file"? <img src={file.iconFile} alt="file icon" /> : <img src={file.iconFolder} alt="folder icon" />}
        {file.commitName}
      </div>
      <div className='center-content'>
        {file.commitMessage}
      </div>
      <div className='right-content'>
        {file.time}
      </div>
    </div>
  })
  return (
    <div className='githubContainer'>
      {structure}
    </div>
  )
}

export default App;
