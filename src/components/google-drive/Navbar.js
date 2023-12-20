import { faBackward } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

export default function NavbarComponent({
  currentFolderId,
  setCurrentFolderId,
  graph,
}) {
  function handleBack() {
    setCurrentFolderId(graph[currentFolderId].parentId);
  }

  return (
    <Navbar bg="light" expand="sm">
      <Navbar.Brand>Google Drive</Navbar.Brand>
      {currentFolderId && graph[currentFolderId].parentId != null && (
        <button
          onClick={handleBack}
          style={{
            position: 'absolute',
            right: '35px',
            border: 'none',
            background: 'transparent',
          }}
        >
          <FontAwesomeIcon icon={faBackward} />
        </button>
      )}
    </Navbar>
  );
}
