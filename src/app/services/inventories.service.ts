export class InventoriesService {

    getInventories(){
        return [
            {
                name: "Fridge", img: 'assets/app/media/img/custom/inventories/refrigerator.jpg', inventoryCat: 'Appliances', inventorySubCat: 'Refrigerator', brand: 'PEL', desc: 'desc'
            },
            {
                name: 'Bed', img: 'assets/app/media/img/custom/inventories/bed.jpg', inventoryCat: 'Wooden', inventorySubCat: 'Double Bed', brand: 'GREE', desc: 'desc'
            }
        ];
    }
}
