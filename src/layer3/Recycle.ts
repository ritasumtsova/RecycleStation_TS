import IRecycle from "../layer1/IRecycle";

export default class Recycle implements IRecycle { /// abstract??
    protected _name: string;
    protected _recyclingCount: number;

    public constructor (name: string, recyclingCount: number) {
        this._name = name;
        this._recyclingCount = recyclingCount;
    }

    public get name (): string {
        return this._name;
    }

    public set name (name: string) {
        this._name = name;
    }

    public get recyclingCount (): number {
        return this._recyclingCount;
    }

    public set recyclingCount (recyclingCount: number) {
        this._recyclingCount = recyclingCount;
    }
}