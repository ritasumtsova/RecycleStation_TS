import IRecycleShopUser from "../layer1/IRecycleShopUser";
import IRecycleShopRecycleStation from "./IRecycleShopRecycleStation";

export default class RecycleShop  implements IRecycleShopRecycleStation, IRecycleShopUser {
    private _phone: string;
    private _goods: string[] = [];

    public constructor (phone: string) {
        this._phone = phone;
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

    public addGoods (goods: string): void {
        if (this._goods.length < 3) {
            this._goods.push(goods);
        } else {
            new Error('The storage is full');
        }
    }

    public addGoodsCallback (goods: string, callback: (error: Error | undefined, data?: string[]) => void): void {
        setTimeout(() => {
            let error!: Error;
            let data!: string[];
      
            if (this._goods.length < 3) {
                this._goods.push(goods);
                data = this._goods;
            } else {
                error = new Error('The storage is full');
            }
      
            callback(error, data);
        }, 3000);
    }

    public addGoodsPromise (goods: string): Promise<Array<string>> {
        return new Promise<Array<string>>((resolve, reject) => { 
            setTimeout(() => {
                if(this._goods.length < 3) {
                    this._goods.push(goods);
                    resolve(this._goods);
                } else {
                    reject(new Error('The storage is full'));
                }
            }, 3000);
        });
    }

    public buyGoods (goods: string): string | null {
        const purchase: string | undefined = this._goods.find(good => good === goods);

        if (purchase) {
            this._goods.splice(this._goods.indexOf(purchase), 1);
            return purchase;
        } else {
            return null;
        }
    }
}