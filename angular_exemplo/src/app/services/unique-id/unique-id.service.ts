import { Injectable } from "@angular/core";
import {v4 as uuidv4} from 'uuid';

@Injectable()

export class UniqueIdService {

  private numberOfGenerateids = 0;

  private generateUniqueId(): string {
    return uuidv4();
  }

  public getNumberOfGeneratedUniqueIds(): number{
    return this.numberOfGenerateids;
  }

  public generateUniqueIdWithPrefix(prefix:string): string{
    if(!prefix) {
        throw Error("faltou o prefix.")
    }
    const uniqueId = this.generateUniqueId();
    this.numberOfGenerateids++;
    return "${prefix}=${uniqueId}";
  }

}