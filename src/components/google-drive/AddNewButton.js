import { Container, Image } from 'react-bootstrap';
import add_new_button from '../../assets/images/add_new_button.png';
import React, { useState } from 'react';
import { Button, Modal, Form, ButtonGroup } from 'react-bootstrap';
import { createNewFile, createNewFolder, isSameNameFolderExist } from './Utils';

const AddNewButton = ({
  currentFolderId,
  setCurrentFolderId,
  graph,
  setGraph,
  primaryKey,
  setPrimaryKey,
}) => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [selection, setSelection] = useState('file');
  const [showError, setShowError] = useState(false);

  function openModal() {
    setOpen(true);
  }

  function closeModal() {
    setShowError(false);
    setName('');
    setOpen(false);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (currentFolderId == 0) return;

    if (isSameNameFolderExist(name, currentFolderId, graph)) {
      setShowError(true);
      return;
    }
    if (selection == 'folder') {
      createNewFolder(
        currentFolderId,
        setCurrentFolderId,
        graph,
        setGraph,
        primaryKey,
        setPrimaryKey,
        name
      );
    } else {
      createNewFile(
        currentFolderId,
        setCurrentFolderId,
        setGraph,
        primaryKey,
        setPrimaryKey,
        name
      );
    }
    setShowError(false);
    setName('');
    closeModal();
  }

  return (
    <>
      <Image src={add_new_button} onClick={openModal} />
      <Modal show={open} onHide={closeModal}>
        <Form onSubmit={handleSubmit}>
          <Modal.Header closeButton>
            <Modal.Title>Create New</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group>
              <Container
                className="d-flex"
                style={{ justifyContent: 'center' }}
              >
                <ButtonGroup aria-label="Basic example" className="p-2">
                  <Button
                    variant={selection == 'file' ? 'primary' : 'light'}
                    onClick={() => setSelection('file')}
                  >
                    File
                  </Button>
                  <Button
                    variant={selection == 'folder' ? 'primary' : 'light'}
                    onClick={() => setSelection('folder')}
                  >
                    Folder
                  </Button>
                </ButtonGroup>
              </Container>
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
              Create
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};

export default AddNewButton;
