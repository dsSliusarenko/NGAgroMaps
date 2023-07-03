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
    label: 'fields',
    isHeadline: true,
  },
  {
    label: 'Map Overview',
    path: 'overview/map',
    isHeadline: false,
    icon: 'planet',
  },
  {
    label: 'List',
    path: 'overview/list',
    isHeadline: false,
    icon: 'field',
  }
];

@Component({
  selector: 'nga-navigation',
  templateUrl: 'navigation.component.html',
  styleUrls: ['navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  navigationList$: Observable<Navigation[]> | undefined;

  constructor() {
  }

  ngOnInit(): void {
    this.navigationList$ = of(navigationItems);
  }
}
