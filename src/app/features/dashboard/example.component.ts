import { Component } from '@angular/core';

@Component({
    selector: 'example-component',
    template: `
    <div *ngFor="let car of Cars" [ngSwitch]="car.color">
      <div *ngSwitchCase="'blue'"
          class="blue">
        {{ car.name }} ({{ car.color }})
      </div>
      <div *ngSwitchCase="'yellow'"
          class="yellow">
        {{ car.name }} ({{ car.color }})
      </div>
      <div *ngSwitchCase="'silver'"
          class="silver">
        {{ car.name }} ({{ car.color }})
      </div>
      <div *ngSwitchCase="'red'"
          class="red">
        {{ car.name }} ({{ car.color }})
      </div>
      <div *ngSwitchDefault
          class="text-warning">
        {{ car.name }} ({{ car.color }})
      </div>
    </div>`
})

export class ExampleComponent {
    Cars: any[] = [
        {
            "name": "BMW",
            "average": 12,
            "color": 'blue'
        },
        {
            "name": "Ford",
            "age": 15,
            "color": 'yellow'
        },
        {
            "name": "Suzuki",
            "age": 18,
            "color": 'silver'
        },
        {
            "name": "MG Hector",
            "age": 14,
            "color": 'red'
        },
        {
            "name": "Jaguar",
            "age": 8,
            "color": 'green'
        }
    ];
}
