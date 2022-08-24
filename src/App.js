import React from 'react';
import './App.css';
import Time from './components/Time';
import Leftside from './components/Leftside';
import Rightside from './components/Rightside';

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
        <Rightside details={rightSideDetails} />
      </div>
      {structure}
    </div>
  )
}


const leftSideDetails = {
    username: "DrPrime01",
    latestCommit: "Added a test file"
}

const rightSideDetails = {
  commitHash: 1558506,
  commits: 3,
  timeStamp: "2022-08-23 2:24:37"
}

export default App;
