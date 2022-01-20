import IRecycle from "./IRecycle";
import IRecycleStation from "./IRecycleStation";
import IRecycleShopUser from "./IRecycleShopUser";

export default class User {
    private __name: string;
    private __phone: string;
    private __goods: string[];
    private __recycles: IRecycle[];
    private __recycleStation: IRecycleStation | null;
    private __recycleShop: IRecycleShopUser | null;

    public constructor (name: string, phone: string) {
        this.__name = name;
        this.__phone = phone;
        this.__goods = [];
        this.__recycles = [];
        this.__recycleStation = null;
        this.__recycleShop = null;
    }

    public get name (): string {
        return this.__name;
    }

    public set name (name: string) {
        this.__name = name.trim();
    }

    public get phone (): string {
        return this.__phone;
    }

    public set phone (phone: string) {
        this.__phone = phone;
    }

    public get goods (): string[] {
        return this.__goods;
    }

    public buyGoods (goods: string): string | null {
        if (this.__recycleShop) {
            let good = this.__recycleShop.buyGoods(goods);

            if (good) {
                this.__goods.push(good);
            }
    
            return good;
        } else {
            return null;
        }
    }

    public get recycles (): IRecycle[] {
        return this.__recycles;
    }

    public addRecycle (recycle: IRecycle): void {
        this.__recycles.push(recycle);
    }

    public giveRecycles (): string {
        if (this.__recycles.length > 0 && this.__recycleStation) {
            let success;

            for (let recycle of this.__recycles) {
                success = this.__recycleStation.addRecycle(recycle);
            }

            if (success) {
                this.__recycles = [];
                return 'Great! Your recycles were taken.';
            } else {
                return 'Error. The station is closed. Try again later.';
            }

        } else {
            return 'You have no recycles to give.'
        }
    }

    public set recycleStation (recycleStation: IRecycleStation) {
        this.__recycleStation = recycleStation;
    }

    public set recycleShop (recycleShop: IRecycleShopUser) {
        this.__recycleShop = recycleShop;
    }
}