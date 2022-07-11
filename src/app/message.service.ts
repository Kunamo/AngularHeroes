import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  constructor() { }

  // initialize an string array names 'messages', EMPTY
  messages: string[] = [];

  // add an element to messages array
  add(message: string) {
    this.messages.push(message);
  }

  // empty the array of messages
  clear() {
    this.messages = [];
  }

}
