import IRecycle from "../layer1/IRecycle";
import IRecycleStation from "../layer1/IRecycleStation";
import IRecycleShopRecycleStation from "./IRecycleShopRecycleStation";

export default class RecycleStation implements IRecycleStation {
    private __phone: string;
    private __adress: string;
    private __isOpen: boolean;
    private __recycles: IRecycle[];
    private __recycleShop: IRecycleShopRecycleStation | null;
    
    public constructor (phone: string, adress: string) {
        this.__phone = phone;
        this.__adress = adress;
        this.__isOpen = false;
        this.__recycles = [];
        this.__recycleShop = null;
    }

    public get phone (): string {
        return this.__phone;
    }

    public set phone (phone: string) {
        this.__phone = phone;
    }

    public get adress (): string {
        return this.__adress;
    }

    public set adress (adress: string) {
        this.__adress = adress;
    }

    public get isOpen (): boolean {
        return this.__isOpen;
    }

    public changeIsOpen (): void {
        this.__isOpen = !this.__isOpen;
    }

    public get recycles (): IRecycle[] {
        return this.__recycles;
    }

    public addRecycle (recycle: IRecycle): boolean {
        if (this.__isOpen) {
            this.__recycles.push(recycle);
            return true;
        } else {
            return false;
        }
    }

    public set recycleShop (recycleShop: IRecycleShopRecycleStation) {
        this.__recycleShop = recycleShop;
    }

    public makeGoods (): string {
        if(this.__recycles.length > 0 && this.__recycleShop) {
            for (let recycle of this.__recycles) {
                switch (recycle.name.toLowerCase()) {
                    case 'plastic':
                        if (recycle.recyclingCount < 4) {
                            this.__recycleShop.addGoods(`clothes${this.__recycles.indexOf(recycle)}`);
                        };
                        break;
                    case 'glass':
                        this.__recycleShop.addGoods(`tableware${this.__recycles.indexOf(recycle)}`);
                        break;
                    case 'paper':
                        if (recycle.recyclingCount < 7) {
                            this.__recycleShop.addGoods(`notebook${this.__recycles.indexOf(recycle)}`);
                        };
                    break;
                    default: 
                        return `${recycle.name} cannot be recycle. Burn it.`; //${recycle.color} 
                }
            };
    
            this.__recycles = [];
            return 'success';
        } else {
            return 'Recycle station has no recycles to make the goods.'
        }
    }
}