const folderStructure = {
    name: "Root",
    type: "folder",
    children: [
        {
            name: "Folder 1",
            type: "folder",
            children: [
                { name: "File 1.txt", type: "file" },
                { name: "File 2.txt", type: "file" }
            ]
        },
        {
            name: "Folder 2",
            type: "folder",
            children: [
                { name: "File 3.txt", type: "file" }
            ]
        }
    ]
};

// Function to add a folder
function addFolder() {
  // Prompt for folder name
  var folderName = prompt("Enter folder name:");
  if (folderName !== null && folderName !== "") {
    // Create folder object
    var newFolder = {
      name: folderName,
      type: "folder",
      children: [],
    };

    // Check if root already exists
    if (!folderStructure.children) {
      folderStructure.children = [];
    }

    // Add new folder to the root
    folderStructure.children.push(newFolder);
    
    // Refresh the folder tree
    refreshFolderTree();

    addFile(folderStructure.children.length - 1); // Index of the new folder
  }
}


// Function to remove a folder
function removeFolder() {
  const folderTree = document.getElementById("folderTree");
  const folders = folderTree.getElementsByClassName("folder");
  if (folders.length > 0) {
    const lastFolder = folders[folders.length - 1];
    lastFolder.parentNode.removeChild(lastFolder); // ลบโฟลเดอร์ออกจาก HTML

    // ลบโฟลเดอร์ออกจาก folderStructure
    removeFolderFromStructure(folderStructure, lastFolder.textContent.trim());
  }
}


// Function to add a file to a folder
function addFile(folderIndex) {
  var folderName = prompt("Enter file name:");
  if (folderName !== null && folderName !== "") {
    // Create file object
    var newFile = {
      name: folderName,
      type: "file"
    };

    // Check if folderIndex is valid
    if (folderIndex >= 0 && folderIndex < folderStructure.children.length) {
      // Add new file to the specified folder
      folderStructure.children[folderIndex].children.push(newFile);

      // Refresh the folder tree
      refreshFolderTree();
    }
  }
}

function createTreeElement(item) {
  const element = document.createElement("div");
  element.textContent = item.name;
  element.classList.add(item.type);
  if (item.type === "folder" && item.children) {
    item.children.forEach((child) => {
      const childElement = createTreeElement(child);
      element.appendChild(childElement);
    });
    
  }
  return element;
}


// Function to refresh the folder tree
function refreshFolderTree() {
    const folderTree = document.getElementById('folderTree');
    folderTree.innerHTML = ''; // Clear the existing tree

    // Recreate the tree
    const treeElement = createTreeElement(folderStructure);
    folderTree.appendChild(treeElement);
}



const folderTree = document.getElementById('folderTree');
const treeElement = createTreeElement(folderStructure);
folderTree.appendChild(treeElement);
