import { Component, OnInit,Input} from '@angular/core';

@Component({
  selector: 'app-navigationmenu',
  templateUrl: './navigationmenu.component.html',
  styleUrls: ['./navigationmenu.component.css']
})
export class NavigationmenuComponent implements OnInit {

  @Input() items: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
