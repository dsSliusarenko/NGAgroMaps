import {Component, OnInit} from "@angular/core";
import {Observable, of} from "rxjs";

interface Navigation {
  label: string;
  path?: string;
  icon?: string;
  isHeadline: boolean;
}

const navigationItems: Navigation[] = [
  {
    label: 'Section',
    isHeadline: true,
  },
  {
    label: 'Test',
    path: 'test1',
    isHeadline: false,
    icon: 'planet',
  },
  {
    label: 'Test',
    path: 'test2',
    isHeadline: false,
    icon: 'planet',
  }
];

@Component({
  selector: 'nga-navigation',
  templateUrl: 'navigation.component.html',
  styleUrls: ['navigation.component.scss']
})
export class NavigationComponent implements OnInit{

  navigationList$: Observable<Navigation[]> | undefined;

  constructor() {
  }

  ngOnInit(): void {
    this.navigationList$ = of(navigationItems);
  }
}
