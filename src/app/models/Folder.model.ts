export class Folder
{
    id: number;
    folderName: string;
    // childrenfolders: Folder[] = [];
    // parentFolder : Folder;
    constructor(id:number , name:string )
    {
        this.id = id;
        this.folderName = name;
    }
}
