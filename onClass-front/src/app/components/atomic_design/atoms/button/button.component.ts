import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input() text: string = "";
  @Input() type: string = "";
  @Input() backgroundColor: String = "";
  @Input() width: String = "170px";
  @Input() height: String = "40px";
  @Input() fontSize: String = "";
  @Input() fontWeight: String = "bold";
  @Input() borderRadius: String = "15px";
  @Input( ) padding: String = "0px, 24px, 0px, 24px";
  @Input() value: String = "";
  @Input() image: String = "";
  @Input() image_width: String = "20px";
  @Input() image_height: String = "20px";



  constructor() { }

  ngOnInit(): void {

  }

}
