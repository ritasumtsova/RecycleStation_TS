import IRecycleShopUser from "../layer1/IRecycleShopUser";
import IRecycleShopRecycleStation from "./IRecycleShopRecycleStation";

export default class RecycleShop  implements IRecycleShopRecycleStation, IRecycleShopUser {
    private __phone: string;
    private __goods: string[] = []; /// readonly????

    public constructor (phone: string) {
        this.__phone = phone;
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

    public addGoods (goods: string): void {
        if (this.__goods.length < 3) {
            this.__goods.push(goods);
        } else {
            new Error('The storage is full');
        }
    }

    public addGoodsCallback (goods: string, callback: (error?: Error, data?: string[]) => void): void {
        setTimeout(() => {
            let error!: Error;
            let data!: string[];
      
            if (this.__goods.length < 3) {
                this.__goods.push(goods);
                data = this.__goods;
            } else {
                error = new Error('The storage is full');
            }
      
            callback(error, data);
        }, 3000);
    }

    public buyGoods (goods: string): string | null { ///?????
        const purchase = this.__goods.find(good => good === goods);

        if (purchase) {
            this.__goods.splice(this.__goods.indexOf(purchase), 1);
            return purchase;
        } else {
            return null;
        }
    }
}