import { Component, NgModuleFactory, Compiler, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { ThreeComponent } from './three/three.component';
import { MyComponent } from './other/my/my.component';
import { OtherModule } from './other/other.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{

  @ViewChild(OneComponent, {read: ElementRef})
  one: ElementRef;



  ngAfterViewInit() {
    console.log('after', this.one);
  }
  title = 'angular-core-course';

  items: Number[] = [];

  comps: any[] = [
    OneComponent,
    TwoComponent,
    ThreeComponent
  ];

  obj = {
    name: 'Zwan',
    title: 'Software Enginner',
    address: {
      postal: 123456,
      no: 3
    }
  };

  entities = [
    {name: 'wan'},
    {name: 'zhen'},
    {name: 'tian'},
  ]

  searchTerm = 'wan';
  compOne = OneComponent;

  OtherModuleComponent = MyComponent;
  myModule: NgModuleFactory<any>;

  constructor(compiler: Compiler) {
    this.myModule = compiler.compileModuleSync(OtherModule);
    console.log('before', this.one);
  }

  getCondClass (index) {
    if (index + 1 === 3) {
      // Using array to add 'third', 'very*important' classes
      return ['third', 'very-important'];
    }

    if (index === this.items.length - 1) {
      // Using string to add class
      return 'last';
    }

    if (index === 0) {
      // Using object to add class
      return {'first': true};
    }
  }

  push () {
    this.items.push(this.items.length + 1);
  }
}
