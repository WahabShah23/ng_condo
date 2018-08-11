export class RolesService
{
    roles = [{name: 'ABC Corporation' , relation:"Management" , owner: "Niaz Khan"} ];


    getRoles()
    {
        return this.roles;
    }

    addRole(name , relation , owner)
    {
        this.roles.push({name: name , relation:relation , owner: owner});
    }

    getRolesbyId(id:number)
    {
        return this.roles[id];
    }
}