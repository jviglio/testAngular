import { Component, signal, computed, Input } from '@angular/core';

@Component({
  selector: 'app-signal',
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.scss'
})
export class SignalComponent {
  count = signal(0);
  @Input() input = 0;
  
  doubleCount = computed(() => this.count() * 2);
  doubleInput = computed(() => this.input * 2);

  increment() {
    this.count.update(value => value + 1);
    this.input += 1;
  }

  decrement() {
    this.count.update(value => value - 1);
    this.input -= 1;
  }

  reset() {
    this.count.set(0);
    this.input = 0;
  }
}
