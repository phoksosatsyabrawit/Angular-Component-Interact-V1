import { Component, Input, OnChanges, SimpleChanges, ViewContainerRef, TemplateRef, EventEmitter, Output, OnInit, inject } from '@angular/core';
import { MessageService } from '../../services/message-service';

@Component({
  selector: 'app-child-component',
  imports: [],
  templateUrl: './child-component.html',
  styleUrl: './child-component.css',
})
export class ChildComponent implements OnInit {

  private _messageService = inject(MessageService);

  quest!: string;

  ngOnInit() {
    this._messageService.message$.subscribe(text => {
      this.quest = text;
    });
  }



  // @Output() childEvent = new EventEmitter();

  // username = 'brawit';

  // ngOnChanges(changes: SimpleChanges): void {

  // }

  // submit() {
  //   console.log('welcome trojan');
  // }

  // callParent() {
  //   this.childEvent.emit();
  // }
}
