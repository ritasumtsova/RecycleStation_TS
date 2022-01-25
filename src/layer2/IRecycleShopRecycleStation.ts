export default interface IRecycleShopRecycleStation {
    goods: string[];

    addGoods (goods: string) : void;
    addGoodsCallback (goods: string, callback: (error: Error | undefined, data?: string[]) => void): void;
}