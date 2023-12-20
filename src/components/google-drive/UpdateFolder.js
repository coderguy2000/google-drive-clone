import React, { useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import RenameModal from './RenameModal';

const UpdateFolder = ({ folder, graph, setGraph, setPrimaryKey }) => {
  const [showRenameModal, setShowRenameModal] = useState(false);

  function handleDelete() {
    let parentId = folder.parentId;
    setGraph((folderStructure) => {
      delete folderStructure[folder.id];
      let childIds = graph[parentId].childId;

      const index = childIds.indexOf(folder.id);
      if (index > -1) {
        // only splice array when item is found
        childIds.splice(index, 1); // 2nd parameter means remove one item only
      }

      folderStructure[parentId].childId = childIds;
      return folderStructure;
    });
    setPrimaryKey((e) => e + 1);
  }

  return (
    <>
      <Dropdown style={{ bottom: '49px' }}>
        <Dropdown.Toggle
          id="dropdown-basic"
          style={{ color: 'black', background: 'none', border: 'none' }}
        ></Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item onClick={() => setShowRenameModal(true)}>
            Rename
          </Dropdown.Item>
          <Dropdown.Item onClick={handleDelete}>Delete</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      {showRenameModal ? (
        <RenameModal
          showRenameModal={showRenameModal}
          setShowRenameModal={setShowRenameModal}
          folder={folder}
          graph={graph}
          setGraph={setGraph}
          setPrimaryKey={setPrimaryKey}
        />
      ) : (
        <></>
      )}
    </>
  );
};

export default UpdateFolder;
