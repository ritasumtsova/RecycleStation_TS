import IRecycle from "./IRecycle";

export default interface IRecycleStation {
    isOpen: boolean;
    recycles: IRecycle[] | [];

    addRecycle (recycle: IRecycle): boolean;
}