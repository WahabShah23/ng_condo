import { Injectable } from '@angular/core';

@Injectable()
export class SpecializedFacilityService {

  inventories = [
    {
        name: "Treadmill", img: 'assets/app/media/img/custom/inventories/treadmill-icon.png', inventoryCat: 'Fitness', inventorySubCat: 'Treadmill', brand: 'PEL', desc: 'desc'
    },
    {
        name: 'Aid Kit', img: 'assets/app/media/img/custom/inventories/aid-kit.png', inventoryCat: 'Health', inventorySubCat: 'First Aid Kit', brand: 'GREE', desc: 'desc'
    }
   ];


   Stocks = [
    {
        name: "A4 Paper", img: 'assets/app/media/img/custom/stock/A4 Size Paper.jpg', stockCat: 'Printing Material', stockSubCat: 'A4 Size Paper.jpg', brand: 'PEL', desc: 'desc'
    },
    {
        name: 'Biscuit', img: 'assets/app/media/img/custom/stock/biscuit.jpg', stockCat: 'Tuck Shop', stockSubCat: 'Buscuit', brand: 'GREE', desc: 'desc'
    }
   ];


   GymItems = [
    {
        name: "Dumbbells", img: 'assets/app/media/img/custom/gym/dumbbell.jpg', category: 'Lifting', subcategory: 'Weight Lifting', description: 'Very High Quality Dumbbells For Building Muscles'
    },
    {
        name: 'Bench', img: 'assets/app/media/img/custom/gym/bench.png', category: 'subcategory', subcategory: 'Chest Workout' , description: 'Intense Chest Building Instrument'
    }
   ];


   gameRooms = [
    {
        name: "Table Tennis", img: 'assets/app/media/img/custom/games/1.jpg', category: 'indoor', allowed: 4 , visitType:"Walking", description: "Table Tennis Room"
    },
    {
        name: 'Squash', img: 'assets/app/media/img/custom/games/2.jpg', category: 'indoor', allowed:5 , visitType:"Bookable", description: "Squash Room"
    }
   ];


   pools = [
    {
        name: "Pool 1", img: 'assets/app/media/img/custom/pools/1.jpg', allowed: 4 , visitType:"Lane Based", description: "The Swimming Pool"
    },
    {
        name: 'Pool 2', img: 'assets/app/media/img/custom/pools/2.jpg', allowed:5 , visitType:"Splash Based", description: "The Swimming Poolssss"
    }
   ];

   movieTheatres = [
    {
        name: "Movie Theatre 1", img: 'assets/app/media/img/custom/movie-theatre/1.jpg', allowed: 4 , description: "Theatre Room for movies"
    },
    {
        name: 'Movie Theatre 2', img: 'assets/app/media/img/custom/movie-theatre/1.jpg',  allowed:5 ,  description: "Theatre Room for documentaries"
    }
   ];

   lounges = [
    {
        name: "Eating Lounge", img: 'assets/app/media/img/custom/lounges/1.jpg', allowed: 4 , floor:"4th", area:"10 sq/m", location:"North-East", description: "The Lounge 1"
    },
    {
        name: 'Lounge 2', img: 'assets/app/media/img/custom/lounges/1.jpg',  allowed:5 ,floor:"4th", area:"10 sq/m", location:"South-East", description: "The Lounge 2"
    }
   ];

  constructor() 
  { }

  //Inventory Starts
  getInventories()
  {
    return this.inventories;
  }
  addInventory(name: string, img: string, category:string, subCategory:string, brand:string, desc: string) 
  {
    this.inventories.push({name: name, img:img, inventoryCat: category, inventorySubCat: subCategory, brand: brand, desc: desc });
  }

  deleteInventory(id)
  {
    console.log(id);
    this.inventories.splice(id,1);
  }
 //Inventory Ends



  //Stocks Start
  getStock()
  {
    return this.Stocks;
  }

  addStock(name: string, img: string, category, subCategory, brand,  desc?: string) 
  {
    this.Stocks.push({name: name, img:img, stockCat: category, stockSubCat: subCategory, brand: brand, desc: desc });
  }

  deleteStock(id)
  {
      this.Stocks.splice(id,1);
  }
 //Stocks End


 //Gym Starts
  
  getGymItems()
  {
    return this.GymItems;
  }

  addGym(itemName, img , category, subcategory, itemDescription) 
  {
    this.GymItems.push({name: itemName, img:img, category, subcategory , description:itemDescription});
  }

  deleteGym(id)
  {
      this.GymItems.splice(id,1);
  }


 //Gym Ends


//Party Room Starts
partyRooms = [
  {
      name: "Party Room 1", img: 'assets/app/media/img/custom/party-rooms/1.jpg', category: 'All', allowed: 100 , description: "Party Room for all occasions"
  },
  {
      name: 'Birthday Party Room', img: 'assets/app/media/img/custom/party-rooms/2.jpg', category: 'Birthday Party', allowed:80 , description: "Room for bithday celebrations"
  }
 ]

 getPartyRooms()
 {
   return this.partyRooms;
 }

 addParty(partyName, img , partyCategory, numberOfParticipants, roomDescription)
 {
  this.partyRooms.push({name: partyName, img:img, category: partyCategory, allowed: numberOfParticipants , description:roomDescription});
 }

 deleteParty(id)
 {
  this.partyRooms.splice(id,1);
}
//Party Room Ends



//Games Start

getGameRooms()
{
return this.gameRooms;
}

addGame(gameName, img , gameCategory, numberOfParticipants, visitType, gameDescription) 
{
  this.gameRooms.push({name: gameName, img:img, category: gameCategory, allowed: numberOfParticipants , visitType:visitType, description:gameDescription});
}

deleteGame(id){
  this.gameRooms.splice(id,1);
}

//Games End


//Pool Starts
getPools()
{
  return this.pools;
}


addPool(poolName, img , numberOfParticipants, visitType, poolDescription) {
  this.pools.push({name: poolName, img:img,  allowed: numberOfParticipants , visitType:visitType, description:poolDescription});
}

deletePool(id){
  this.pools.splice(id,1);
}

//Pool Ends


//Movie Theatre Started
getMovieTheatre()
{
  return this.movieTheatres;
}

addTheatre(theatreName, img , theatreParticipants, theatreDescription) {
  this.movieTheatres.push({name: theatreName, img:img,  allowed: theatreParticipants , description:theatreDescription});
}

deleteTheatre(id)
{
  this.movieTheatres.splice(id,1);
}

//Movie Theatre Ends


//Lounge Starts

getLounges()
{
  return this.lounges;
}

addLounge(loungeName, img , loungeParticipants, floor, area, location, loungeDescription) 
{
    this.lounges.push({name: loungeName, img:img,  allowed: loungeParticipants , floor:floor, area:area, location:location, description:loungeDescription});
}

deleteLounge(id)
{
    this.lounges.splice(id,1);
}

//Lounge Ends
}
