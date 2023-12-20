import React, { useState } from 'react';

import { init } from './google-drive/Utils';
import GoogleDriveDashboard from './google-drive/GoogleDriveDashboard.js';
import { useEffect } from 'react';

function App() {
  const [currentFolderId, setCurrentFolderId] = useState(0);
  const [graph, setGraph] = useState({});
  const [primaryKey, setPrimaryKey] = useState(1);

  useEffect(() => {
    init(setCurrentFolderId, setGraph, primaryKey, setPrimaryKey);
  }, []);

  return (
    <GoogleDriveDashboard
      currentFolderId={currentFolderId}
      setCurrentFolderId={setCurrentFolderId}
      graph={graph}
      setGraph={setGraph}
      primaryKey={primaryKey}
      setPrimaryKey={setPrimaryKey}
    />
  );
}

export default App;
