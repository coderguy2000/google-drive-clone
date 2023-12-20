import React, { useState } from 'react';
import { createNewFile, createNewFolder } from './Utils';
import Navbar from './Navbar';
import { Container } from 'react-bootstrap';
import Folder from './Folder';
import File from './File';
import AddNewButton from './AddNewButton';
import FolderBreadcrumbs from './FolderBreadcrumbs';

const GoogleDriveDashboard = ({
  currentFolderId,
  setCurrentFolderId,
  graph,
  setGraph,
  primaryKey,
  setPrimaryKey,
}) => {
  let presentFolders = [],
    presentFiles = [];

  if (currentFolderId) {
    graph[currentFolderId].childId.map((child) => {
      if (graph[child].type == 'folder') {
        presentFolders.push(graph[child]);
      } else {
        presentFiles.push(graph[child]);
      }
    });
  }

  return (
    <>
      <Navbar
        currentFolderId={currentFolderId}
        setCurrentFolderId={setCurrentFolderId}
        graph={graph}
      />
      <Container fluid>
        <div className="d-flex align-items-center">
          <FolderBreadcrumbs
            currentFolderId={currentFolderId}
            setCurrentFolderId={setCurrentFolderId}
            graph={graph}
          />
        </div>
        <div className="d-flex flex-wrap ss">
          {presentFolders.length > 0 && (
            <>
              {presentFolders.map((folder, index) => (
                <div
                  key={index}
                  style={{ width: '110px', height: '110px', maxWidth: '250px' }}
                  className="p-2 m-3"
                >
                  <Folder
                    folder={folder}
                    graph={graph}
                    setGraph={setGraph}
                    setCurrentFolderId={setCurrentFolderId}
                    setPrimaryKey={setPrimaryKey}
                  />
                </div>
              ))}
            </>
          )}
          {presentFiles.length > 0 && (
            <>
              {presentFiles.map((childFile, index) => (
                <div
                  key={index}
                  style={{ width: '110px', height: '110px', maxWidth: '250px' }}
                  className="p-2 m-3"
                >
                  <File
                    file={childFile}
                    graph={graph}
                    setGraph={setGraph}
                    setCurrentFolderId={setCurrentFolderId}
                    setPrimaryKey={setPrimaryKey}
                  />
                </div>
              ))}
            </>
          )}
          <div className="m-3" style={{ width: '110px', height: '110px' }}>
            <AddNewButton
              currentFolderId={currentFolderId}
              setCurrentFolderId={setCurrentFolderId}
              graph={graph}
              setGraph={setGraph}
              primaryKey={primaryKey}
              setPrimaryKey={setPrimaryKey}
            />
          </div>
        </div>
      </Container>
    </>
  );
};

export default GoogleDriveDashboard;
