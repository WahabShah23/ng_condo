export class RulesService {
    rules =  [
        {
            name: "GYM", img: 'assets/app/media/img/custom/inventories/placeholder.png', desc: 'desc'
        },
        {
            name: 'Party Room', img: 'assets/app/media/img/custom/inventories/placeholder.png', desc: 'desc'
        }
    ];
    getRules(){
        return this.rules;
    }
}
