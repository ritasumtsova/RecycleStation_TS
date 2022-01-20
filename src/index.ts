import IRecycle from "./layer1/IRecycle";
import IRecycleShopRecycleStation from "./layer2/IRecycleShopRecycleStation";
import IRecycleShopUser from "./layer1/IRecycleShopUser";
import IRecycleStation from "./layer1/IRecycleStation";
import Plastic from "./layer3/Plastic.js";
import RecycleShop from "./layer2/RecycleShop.js";
import RecycleStation from "./layer2/RecycleStation.js";
import User from "./layer1/User.js";


const greenPlastic: IRecycle = new Plastic('plastic', 2, 10, 'green');
const bluePlastic: IRecycle = new Plastic('plastic', 1, 8, 'blue');
const blackPlastic: IRecycle = new Plastic('plastic', 9, 34, 'black');
const yellowPlastic: IRecycle = new Plastic('plastic', 1, 46, 'yellow');
const recycleShopRecycleStation: IRecycleShopRecycleStation  = new RecycleShop('+380939009393');
const recycleShopUser: IRecycleShopUser  = new RecycleShop('+380939009393');
const recycleStationUser: IRecycleStation = new RecycleStation('+380505005050', 'Kharkiv');
const recycleStation: RecycleStation = new RecycleStation('+380505005050', 'Kharkiv'); ///  BAD PRACTICE????
const user = new User('Rita', '+380939009090');
const recycleShop: RecycleShop =  new RecycleShop('+380939009393'); ///  ///  BAD PRACTICE????


//recycleShop.addGoods('t-shirt');

// CALLBACK INVOKE
recycleShop.addGoodsCallback('async table 1', (error, data) => {
    if (error) {
        console.error(error);
    } else {
        console.log(data);
        recycleShop.addGoodsCallback('async table 2', (error, data) => {
            if (error) {
                console.error(error);
            } else {
                console.log(data);
                recycleShop.addGoodsCallback('async table 3', (error, data) => {
                    if (error) {
                        console.error(error);
                    } else {
                        console.log(data);
                    }
                });
            }
        });
    }
});