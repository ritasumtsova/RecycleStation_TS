import IRecycle from "../layer1/IRecycle";
import IRecycleStation from "../layer1/IRecycleStation";
import IRecycleShopRecycleStation from "./IRecycleShopRecycleStation";

export default class RecycleStation implements IRecycleStation {
    private _phone: string;
    private _adress: string;
    private _isOpen: boolean;
    private _recycles: IRecycle[];
    private _recycleShop: IRecycleShopRecycleStation | null;
    
    public constructor (phone: string, adress: string) {
        this._phone = phone;
        this._adress = adress;
        this._isOpen = false;
        this._recycles = [];
        this._recycleShop = null;
    }

    public get phone (): string {
        return this._phone;
    }

    public set phone (phone: string) {
        this._phone = phone;
    }

    public get adress (): string {
        return this._adress;
    }

    public set adress (adress: string) {
        this._adress = adress;
    }

    public get isOpen (): boolean {
        return this._isOpen;
    }

    public changeIsOpen (): void {
        this._isOpen = !this._isOpen;
    }

    public get recycles (): IRecycle[] {
        return this._recycles;
    }

    public addRecycle (recycle: IRecycle): boolean {
        if (this._isOpen) {
            this._recycles.push(recycle);
            return true;
        } else {
            return false;
        }
    }

    public set recycleShop (recycleShop: IRecycleShopRecycleStation) {
        this._recycleShop = recycleShop;
    }

    public makeGoods (): string {
        if(this._recycles.length > 0 && this._recycleShop) {
            for (let recycle of this._recycles) {
                switch (recycle.name.toLowerCase()) {
                    case 'plastic':
                        if (recycle.recyclingCount < 4) {
                            this._recycleShop.addGoods(`clothes${this._recycles.indexOf(recycle)}`);
                        }
                        break;
                    case 'glass':
                        this._recycleShop.addGoods(`tableware${this._recycles.indexOf(recycle)}`);
                        break;
                    case 'paper':
                        if (recycle.recyclingCount < 7) {
                            this._recycleShop.addGoods(`notebook${this._recycles.indexOf(recycle)}`);
                        }
                    break;
                    default: 
                        return `${recycle.name} cannot be recycle. Burn it.`; 
                }
            };
    
            this._recycles = [];
            return 'success';
        } else {
            return 'Recycle station has no recycles to make the goods.';
        }
    }
}