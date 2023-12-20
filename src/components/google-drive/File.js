import React from 'react';
import { Image } from 'react-bootstrap';
import fileImage from '../../assets/images/fileImage.png';
import UpdateFolder from './UpdateFolder';

export default function File({
  file,
  graph,
  setGraph,
  setCurrentFolderId,
  setPrimaryKey,
}) {
  return (
    <>
      <div variant="light" className="text-truncate w-100 btn btn-light">
        <Image src={fileImage} fluid />
        <p style={{ fontSize: 'small' }} className="text-truncate w-100">
          {file.name}
        </p>
      </div>
      <UpdateFolder
        folder={file}
        graph={graph}
        setGraph={setGraph}
        setPrimaryKey={setPrimaryKey}
      />
    </>
  );
}
