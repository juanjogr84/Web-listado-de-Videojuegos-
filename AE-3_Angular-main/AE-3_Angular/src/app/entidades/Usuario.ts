export class Usuario{
    private _user : string;
    private _password : string;

    constructor(user : string, password : string){
        this._user = user;
        this._password = password
    }

    public get user() : string{
        return this._user;
    }

    public get password() : string{
        return this._password;
    }

}