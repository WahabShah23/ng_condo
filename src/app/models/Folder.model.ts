export class Folder
{
    id: number;
    folderName: string;
    childrenfolders: Folder[] = [];
    parentFolder : Folder;
    constructor(id:number , name:string , parent:Folder)
    {
        this.id = id;
        this.folderName = name;
        this.parentFolder = parent;
    }
}