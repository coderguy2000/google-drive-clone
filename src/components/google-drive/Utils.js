export let primaryKey = 1;
let ROOT_FOLDER = 'root-folder';

export function init(setCurrentFolderId, setGraph, primaryKey, setPrimaryKey) {
  let folder = {
    id: primaryKey,
    type: 'folder',
    name: ROOT_FOLDER,
    childId: [],
    parentId: null,
  };

  setGraph((prev) => {
    let folderStructure = prev;
    folderStructure[primaryKey] = folder;
    return folderStructure;
  });

  setCurrentFolderId(folder.id);
  setPrimaryKey((e) => e + 1);
}

export function createNewFolder(
  currentFolderId,
  setCurrentFolderId,
  graph,
  setGraph,
  primaryKey,
  setPrimaryKey,
  folderName
) {
  let folder = {
    id: primaryKey,
    type: 'folder',
    name: folderName,
    childId: [],
    parentId: currentFolderId,
  };

  //add new child to it's parent
  setGraph((prev) => {
    let folderStructure = prev;
    folderStructure[primaryKey] = folder;
    if (folderStructure[currentFolderId].childId.includes(folder.id) == false)
      folderStructure[currentFolderId].childId.push(folder.id);
    return folderStructure;
  });

  setPrimaryKey((e) => e + 1);
}

export function createNewFile(
  currentFolderId,
  setCurrentFolderId,
  setGraph,
  primaryKey,
  setPrimaryKey,
  fileName
) {
  let file = {
    id: primaryKey,
    type: 'file',
    name: fileName,
    parentId: currentFolderId,
  };

  //add new child to it's parent
  setGraph((prev) => {
    let graphStructure = prev;
    graphStructure[primaryKey] = file;
    if (graphStructure[currentFolderId].childId.includes(file.id) == false)
      graphStructure[currentFolderId].childId.push(file.id);
    return graphStructure;
  });

  setPrimaryKey((e) => e + 1);
}

export function getFolderPath(currentFolderId, graph) {
  if (currentFolderId <= 1) return [];

  let path = [],
    folderId = currentFolderId;

  while (graph[folderId].parentId != null) {
    path.push(graph[folderId].parentId);
    folderId = graph[folderId].parentId;
  }
  let start = 0,
    end = path.length - 1;
  while (start <= end) {
    let temp = path[start];
    path[start] = path[end];
    path[end] = temp;
    start++;
    end--;
  }
  return path;
}

export function isSameNameFolderExist(name, currentFolderId, graph) {
  let childIds = graph[currentFolderId].childId;

  for (let i = 0; i < childIds.length; i++) {
    if (graph[childIds[i]].name == name) return true;
  }
  console.log(childIds);
  return false;
}
