import React from 'react';
import './App.css';
import Time from './components/Time';
import Leftside from './components/leftside';

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
      <Time timeStamp={file.time} />
    </div>
  })
  return (
    <div className='githubContainer'>
      <div className='header'>
        <Leftside details={leftSideDetails} />
      </div>
      {structure}
    </div>
  )
}

const profileImage = require("./images/mypics.jpeg")

const leftSideDetails = {
    image: profileImage,
    username: "DrPrime01",
    latestCommit: "Added a test file"
}

export default App;
