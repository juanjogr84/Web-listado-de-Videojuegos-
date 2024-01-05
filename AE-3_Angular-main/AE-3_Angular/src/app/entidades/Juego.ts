
export class Juego{
    private _id : number;
    private _titulo : string;
    private _company : string;
    private _valoracion : number;
    private _img : string;

    static contadorId : number = 1;

    constructor(titulo : string, company : string, valoracion : number, img : string){
        this._id = Juego.contadorId++;
        this._titulo = titulo;
        this._company = company;
        this._valoracion = valoracion;
        this._img = img;
    }

    public get id() : number{
        return this._id;
    }

    public get titulo() : string{
        return this._titulo;
    }

    public get company() : string{
        return this._company;
    }

    public get valoracion() : number{
        return this._valoracion;
    }

    public get img() : string{
        return this._img;
    }
}