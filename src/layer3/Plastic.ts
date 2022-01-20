import Recycle from "./Recycle";

export default class Plastic extends Recycle {
    private __weight: number;
    private __color: string;

    public constructor (name: string, recyclingCount: number, weight: number, color: string) {
        super(name, recyclingCount);
        this.__color = color;
        this.__weight = weight;
    }

    public get weight (): number {
        return this.__weight;
    }

    public set weight (weight: number) {
        this.__weight = weight;
    }

    public get color (): string {
        return this.__color;
    }

    public set color (color: string) {
        this.__color = color;
    }
}