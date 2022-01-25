import IRecycle from "./IRecycle";
import IRecycleStation from "./IRecycleStation";
import IRecycleShopUser from "./IRecycleShopUser";

export default class User {
    private _name: string;
    private _phone: string;
    private _goods: string[];
    private _recycles: IRecycle[];
    private _recycleStation: IRecycleStation | null;
    private _recycleShop: IRecycleShopUser | null;

    public constructor (name: string, phone: string) {
        this._name = name;
        this._phone = phone;
        this._goods = [];
        this._recycles = [];
        this._recycleStation = null;
        this._recycleShop = null;
    }

    public get name (): string {
        return this._name;
    }

    public set name (name: string) {
        this._name = name.trim();
    }

    public get phone (): string {
        return this._phone;
    }

    public set phone (phone: string) {
        this._phone = phone;
    }

    public get goods (): string[] {
        return this._goods;
    }

    public buyGoods (goods: string): string | null {
        if (this._recycleShop) {
            let good: string | null = this._recycleShop.buyGoods(goods);

            if (good) {
                this._goods.push(good);
            }
    
            return good;
        } else {
            return null;
        }
    }

    public get recycles (): IRecycle[] {
        return this._recycles;
    }

    public addRecycle (recycle: IRecycle): void {
        this._recycles.push(recycle);
    }

    public giveRecycles (): string {
        if (this._recycles.length > 0 && this._recycleStation) {
            let success!: boolean;

            for (let recycle of this._recycles) {
                success = this._recycleStation.addRecycle(recycle);
            }

            if (success) {
                this._recycles = [];
                return 'Great! Your recycles were taken.';
            } else {
                return 'Error. The station is closed. Try again later.';
            }

        } else {
            return 'You have no recycles to give.';
        }
    }

    public set recycleStation (recycleStation: IRecycleStation) {
        this._recycleStation = recycleStation;
    }

    public set recycleShop (recycleShop: IRecycleShopUser) {
        this._recycleShop = recycleShop;
    }
}