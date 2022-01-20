export default interface IRecycleShopUser {
    goods: string[] | [];

    buyGoods (good: string) : string | null;
}