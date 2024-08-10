import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";


@Injectable({
    providedIn: 'root'
})

export class MusicService {

    private _httpClient: HttpClient

    constructor(httpClient: HttpClient){
        this._httpClient = httpClient;
    }

    obterMusicas(){
        
        
        return 'bla'
    }


}