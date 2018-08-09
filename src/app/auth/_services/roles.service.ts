export class RolesService
{
    roles = [{name: 'ABC Corporation' , relation:"Manager" , owner: "Niaz Khan"} ];


    getRoles()
    {
        return this.roles;
    }

    addRole(name , relation , owner)
    {
        this.roles.push({name: name , relation:relation , owner: owner});
    }
}