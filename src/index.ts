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
const recycleStation: IRecycleStation = new RecycleStation('+380505005050', 'Kharkiv');
const user = new User('Rita', '+380939009090');

console.log(greenPlastic);
console.log(recycleShopRecycleStation);
console.log(recycleShopUser);
console.log(recycleStation);
console.log(user);

// recycleShop.addGoods('t-shirt');

// CALLBACK INVOKE
// recycleShop.addGoodsCallback('async table 1', (error, data) => {
//     if (error) {
//         console.error(error);
//     } else {
//         console.log(data);
//         recycleShop.addGoodsCallback('async table 2', (error, data) => {
//             if (error) {
//                 console.error(error);
//             } else {
//                 console.log(data);
//                 recycleShop.addGoodsCallback('async table 3', (error, data) => {
//                     if (error) {
//                         console.error(error);
//                     } else {
//                         console.log(data);
//                     }
//                 });
//             }
//         });
//     }
// });