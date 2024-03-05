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

function createTreeElement(item) {
    const element = document.createElement('div');
    element.textContent = item.name;
    element.classList.add(item.type);
    if (item.type === 'folder' && item.children) {
        item.children.forEach(child => {
            const childElement = createTreeElement(child);
            element.appendChild(childElement);
        });
    }
    return element;
}

const folderTree = document.getElementById('folderTree');
const treeElement = createTreeElement(folderStructure);
folderTree.appendChild(treeElement);
