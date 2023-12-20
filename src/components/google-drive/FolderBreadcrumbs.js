import React from 'react';
import { Breadcrumb } from 'react-bootstrap';
import { getFolderPath } from './Utils';

export default function FolderBreadcrumbs({
  currentFolderId,
  setCurrentFolderId,
  graph,
}) {
  let path = getFolderPath(currentFolderId, graph);

  return (
    <Breadcrumb
      className="flex-grow-1"
      listProps={{ className: 'bg-white pl-0 m-0' }}
    >
      {path.map((folderId, index) => (
        <Breadcrumb.Item
          key={index}
          className="text-truncate d-inline-block"
          style={{ maxWidth: '150px' }}
          onClick={() => setCurrentFolderId(folderId)}
        >
          {graph[folderId].name}
        </Breadcrumb.Item>
      ))}
    </Breadcrumb>
  );
}
