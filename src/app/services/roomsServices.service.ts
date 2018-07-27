import { Subject } from 'rxjs/Subject';


export class RoomsService
{

    private roomTypes = [
        {
            name: "Party Rooms", img: 'assets/app/media/img/custom/party-rooms/1.jpg', description: "Party Room for all occasions",
            rooms: 
            [{name: "Party Rooms 1", img: 'assets/app/media/img/custom/party-rooms/1.jpg', description: "Party Room No. 1"},
             {name: "Party Rooms 2", img: 'assets/app/media/img/custom/party-rooms/1.jpg', description: "Party Room No. 2"}]
        },
        {
            name: 'Inventory Rooms', img: 'assets/app/media/img/custom/party-rooms/1.jpg', description: "Rooms for Inventory Storage",
            rooms: 
            [{name: "Inventory Room 1", img: 'assets/app/media/img/custom/party-rooms/2.jpg', description: "Treadmill For Exercise"}]
        }
       ];
    constructor()
    {

    }

    getRoomsTypes()
    {
        return this.roomTypes;
    }
    getRoomTypeByIndex(id:number)
    {
        return this.roomTypes[id];
    }
    addRoomType(partyName , img, roomDescription)
    {
        this.roomTypes.push({name: partyName, img:img,  description:roomDescription , rooms: []});
    }
    deleteRoomType(id)
    {
        
      this.roomTypes.splice(id, 1);
    //   alert(JSON.stringify(this.roomTypes));
    }

    addRoomToIndexOfType(index , roomName, img, roomDescription)
    {
        this.roomTypes[index].rooms.push({name:roomName, img:img, description:roomDescription})

    } 
    deleteRoomFromType(index, roomID)
    {
      
        this.roomTypes[index].rooms.splice(roomID, 1);
    }

}