var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./layer3/Plastic.js", "./layer2/RecycleShop.js", "./layer2/RecycleStation.js", "./layer1/User.js"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const Plastic_js_1 = __importDefault(require("./layer3/Plastic.js"));
    const RecycleShop_js_1 = __importDefault(require("./layer2/RecycleShop.js"));
    const RecycleStation_js_1 = __importDefault(require("./layer2/RecycleStation.js"));
    const User_js_1 = __importDefault(require("./layer1/User.js"));
    const greenPlastic = new Plastic_js_1.default('plastic', 2, 10, 'green');
    const bluePlastic = new Plastic_js_1.default('plastic', 1, 8, 'blue');
    const blackPlastic = new Plastic_js_1.default('plastic', 9, 34, 'black');
    const yellowPlastic = new Plastic_js_1.default('plastic', 1, 46, 'yellow');
    const recycleShopRecycleStation = new RecycleShop_js_1.default('+380939009393');
    const recycleShopUser = new RecycleShop_js_1.default('+380939009393');
    const recycleStationUser = new RecycleStation_js_1.default('+380505005050', 'Kharkiv');
    const recycleStation = new RecycleStation_js_1.default('+380505005050', 'Kharkiv');
    const user = new User_js_1.default('Rita', '+380939009090');
    const recycleShop = new RecycleShop_js_1.default('+380939009393');
    recycleShop.addGoodsCallback('async table 1', (error, data) => {
        if (error) {
            console.error(error);
        }
        else {
            console.log(data);
            recycleShop.addGoodsCallback('async table 2', (error, data) => {
                if (error) {
                    console.error(error);
                }
                else {
                    console.log(data);
                    recycleShop.addGoodsCallback('async table 3', (error, data) => {
                        if (error) {
                            console.error(error);
                        }
                        else {
                            console.log(data);
                        }
                    });
                }
            });
        }
    });
});
//# sourceMappingURL=index.js.map