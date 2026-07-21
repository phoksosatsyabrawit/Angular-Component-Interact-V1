import { Component, signal, ViewChild, AfterViewInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChildComponent } from './component/child-component/child-component';
import { MessageService } from './services/message-service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ChildComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('component-interact-V1');

  private _messageService = inject(MessageService); // dependency injection

  // @ViewChild(ChildComponent) child!: ChildComponent;

  // ngAfterViewInit(): void {
  //   this.child.username = 'block chain';
  //   console.log(this.child);
  // }

  submitQuest() {
    this._messageService.sendMessage('who are you ?');
  }

  // parent() {
  //   console.log('welcome to cyber');
  // }
}
