import Recycle from "./Recycle";

export default class Plastic extends Recycle {
    private _weight: number;
    private _color: string;

    public constructor (name: string, recyclingCount: number, weight: number, color: string) {
        super(name, recyclingCount);
        this._color = color;
        this._weight = weight;
    }

    public get weight (): number {
        return this._weight;
    }

    public set weight (weight: number) {
        this._weight = weight;
    }

    public get color (): string {
        return this._color;
    }

    public set color (color: string) {
        this._color = color;
    }
}