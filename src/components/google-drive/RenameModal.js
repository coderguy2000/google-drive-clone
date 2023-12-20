import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import { isSameNameFolderExist } from './Utils';

const RenameModal = ({
  showRenameModal,
  setShowRenameModal,
  folder,
  graph,
  setGraph,
  setPrimaryKey,
}) => {
  const [name, setName] = useState('');
  const [showError, setShowError] = useState(false);

  function openModal() {
    setShowRenameModal(true);
  }

  function closeModal() {
    setName('');
    setShowError(false);
    setShowRenameModal(false);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (isSameNameFolderExist(name, graph[folder.id].parentId, graph)) {
      setShowError(true);
      return;
    }

    setGraph((folderStructure) => {
      folderStructure[folder.id].name = name;

      return folderStructure;
    });

    setPrimaryKey((e) => e + 1);
    setName('');
    setShowError(false);
    closeModal();
  }

  return (
    <>
      {/* <Image src={add_new_button} onClick={openModal} /> */}
      <Modal show={showRenameModal} onHide={closeModal}>
        <Form onSubmit={handleSubmit}>
          <Modal.Header closeButton>
            <Modal.Title>Rename it</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group>
              <Form.Control
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              {showError && <div>Same Name Exist ...Please try again</div>}
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" type="submit" size="lg">
              Rename it
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};

export default RenameModal;
