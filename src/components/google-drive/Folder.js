import React from 'react';
import { Image } from 'react-bootstrap';
import folderImage from '../../assets/images/folderImage.png';
import UpdateFolder from './UpdateFolder';

export default function Folder({
  folder,
  graph,
  setGraph,
  setCurrentFolderId,
  setPrimaryKey,
}) {
  return (
    <>
      <div
        variant="light"
        className="text-truncate w-100 btn btn-light"
        onDoubleClick={() => setCurrentFolderId(folder.id)}
      >
        <Image src={folderImage} fluid />
        <div
          style={{
            fontSize: 'small',
          }}
          className="text-truncate w-100"
        >
          <p>{folder.name}</p>
        </div>
      </div>
      <UpdateFolder
        folder={folder}
        graph={graph}
        setGraph={setGraph}
        setPrimaryKey={setPrimaryKey}
      />
    </>
  );
}
