import { Service } from '@angular/core';
import { Subject } from 'rxjs';

@Service()
export class MessageService {
    // recieved
    private _messageSource = new Subject<string>();
    // access
    message$ = this._messageSource.asObservable();

    // sending
    sendMessage(text: string) {
        this._messageSource.next(text);
    }
}
