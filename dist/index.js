define("layer1/IRecycle", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("layer2/IRecycleShopRecycleStation", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("layer1/IRecycleShopUser", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("layer1/IRecycleStation", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("layer3/Recycle", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Recycle {
        constructor(name, recyclingCount) {
            this._name = name;
            this._recyclingCount = recyclingCount;
        }
        get name() {
            return this._name;
        }
        set name(name) {
            this._name = name;
        }
        get recyclingCount() {
            return this._recyclingCount;
        }
        set recyclingCount(recyclingCount) {
            this._recyclingCount = recyclingCount;
        }
    }
    exports.default = Recycle;
});
define("layer3/Plastic", ["require", "exports", "layer3/Recycle"], function (require, exports, Recycle_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Plastic extends Recycle_1.default {
        constructor(name, recyclingCount, weight, color) {
            super(name, recyclingCount);
            this.__color = color;
            this.__weight = weight;
        }
        get weight() {
            return this.__weight;
        }
        set weight(weight) {
            this.__weight = weight;
        }
        get color() {
            return this.__color;
        }
        set color(color) {
            this.__color = color;
        }
    }
    exports.default = Plastic;
});
define("layer2/RecycleShop", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class RecycleShop {
        constructor(phone) {
            this.__goods = [];
            this.__phone = phone;
        }
        get phone() {
            return this.__phone;
        }
        set phone(phone) {
            this.__phone = phone;
        }
        get goods() {
            return this.__goods;
        }
        addGoods(goods) {
            this.__goods.push(goods);
        }
        buyGoods(goods) {
            const purchase = this.__goods.find(good => good === goods);
            if (purchase) {
                this.__goods.splice(this.__goods.indexOf(purchase), 1);
                return purchase;
            }
            else {
                return null;
            }
        }
    }
    exports.default = RecycleShop;
});
define("layer2/RecycleStation", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class RecycleStation {
        constructor(phone, adress) {
            this.__phone = phone;
            this.__adress = adress;
            this.__isOpen = false;
            this.__recycles = [];
            this.__recycleShop = null;
        }
        get phone() {
            return this.__phone;
        }
        set phone(phone) {
            this.__phone = phone;
        }
        get adress() {
            return this.__adress;
        }
        set adress(adress) {
            this.__adress = adress;
        }
        get isOpen() {
            return this.__isOpen;
        }
        changeIsOpen() {
            this.__isOpen = !this.__isOpen;
        }
        get recycles() {
            return this.__recycles;
        }
        addRecycle(recycle) {
            if (this.__isOpen) {
                this.__recycles.push(recycle);
                return true;
            }
            else {
                return false;
            }
        }
        set recycleShop(recycleShop) {
            this.__recycleShop = recycleShop;
        }
        makeGoods() {
            if (this.__recycles.length > 0 && this.__recycleShop) {
                for (let recycle of this.__recycles) {
                    switch (recycle.name.toLowerCase()) {
                        case 'plastic':
                            if (recycle.recyclingCount < 4) {
                                this.__recycleShop.addGoods(`clothes${this.__recycles.indexOf(recycle)}`);
                            }
                            ;
                            break;
                        case 'glass':
                            this.__recycleShop.addGoods(`tableware${this.__recycles.indexOf(recycle)}`);
                            break;
                        case 'paper':
                            if (recycle.recyclingCount < 7) {
                                this.__recycleShop.addGoods(`notebook${this.__recycles.indexOf(recycle)}`);
                            }
                            ;
                            break;
                        default:
                            return `${recycle.name} cannot be recycle. Burn it.`;
                    }
                }
                ;
                this.__recycles = [];
                return 'success';
            }
            else {
                return 'Recycle station has no recycles to make the goods.';
            }
        }
    }
    exports.default = RecycleStation;
});
define("layer1/User", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class User {
        constructor(name, phone) {
            this.__name = name;
            this.__phone = phone;
            this.__goods = [];
            this.__recycles = [];
            this.__recycleStation = null;
            this.__recycleShop = null;
        }
        get name() {
            return this.__name;
        }
        set name(name) {
            this.__name = name.trim();
        }
        get phone() {
            return this.__phone;
        }
        set phone(phone) {
            this.__phone = phone;
        }
        get goods() {
            return this.__goods;
        }
        buyGoods(goods) {
            if (this.__recycleShop) {
                let good = this.__recycleShop.buyGoods(goods);
                if (good) {
                    this.__goods.push(good);
                }
                return good;
            }
            else {
                return null;
            }
        }
        get recycles() {
            return this.__recycles;
        }
        addRecycle(recycle) {
            this.__recycles.push(recycle);
        }
        giveRecycles() {
            if (this.__recycles.length > 0 && this.__recycleStation) {
                let success;
                for (let recycle of this.__recycles) {
                    success = this.__recycleStation.addRecycle(recycle);
                }
                if (success) {
                    this.__recycles = [];
                    return 'Great! Your recycles were taken.';
                }
                else {
                    return 'Error. The station is closed. Try again later.';
                }
            }
            else {
                return 'You have no recycles to give.';
            }
        }
        set recycleStation(recycleStation) {
            this.__recycleStation = recycleStation;
        }
        set recycleShop(recycleShop) {
            this.__recycleShop = recycleShop;
        }
    }
    exports.default = User;
});
define("index", ["require", "exports", "layer3/Plastic", "layer2/RecycleShop", "layer2/RecycleStation", "layer1/User"], function (require, exports, Plastic_js_1, RecycleShop_js_1, RecycleStation_js_1, User_js_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const greenPlastic = new Plastic_js_1.default('plastic', 2, 10, 'green');
    const bluePlastic = new Plastic_js_1.default('plastic', 1, 8, 'blue');
    const blackPlastic = new Plastic_js_1.default('plastic', 9, 34, 'black');
    const yellowPlastic = new Plastic_js_1.default('plastic', 1, 46, 'yellow');
    const recycleShopRecycleStation = new RecycleShop_js_1.default('+380939009393');
    const recycleShopUser = new RecycleShop_js_1.default('+380939009393');
    const recycleStation = new RecycleStation_js_1.default('+380505005050', 'Kharkiv');
    const user = new User_js_1.default('Rita', '+380939009090');
    console.log(greenPlastic);
    console.log(recycleShopRecycleStation);
    console.log(recycleShopUser);
    console.log(recycleStation);
    console.log(user);
});
//# sourceMappingURL=index.js.map