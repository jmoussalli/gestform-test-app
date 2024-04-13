import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, BehaviorSubject, Subscription, interval} from 'rxjs';
import {switchMap, map} from 'rxjs/operators';

@Component({
  selector: 'app-app-gestform-test',
  templateUrl: './app-gestform-test.component.html',
  styleUrls: ['./app-gestform-test.component.css']
})
export class AppGestformTestComponent implements OnInit, OnDestroy {
  currentIntervalSubject = new BehaviorSubject<number>(500);
  currentNumber?: number;
  currentResult?: string;
  tenLastResults: string[] = [];
  libStartButtonLabel = 'Start';
  isPaused = true;
  numberGenerationSubscription: Subscription | null = null;

  ngOnInit(): void {
    // this.startGeneratingNumbers();
  }

  resetPage() {
    location.reload();
  }

  startGeneratingNumbers(): void {
    this.isPaused = false;
    this.numberGenerationSubscription = this.currentIntervalSubject.pipe(
      switchMap(interval => this.generateNumbersContinuously(interval))
    ).subscribe(result => {
      this.currentResult = result;
    });
  }

  stopGeneratingNumbers(): void {
    this.libStartButtonLabel = 'Resume';
    this.isPaused = true;
    this.ngOnDestroy();
  }

  generateNumbersContinuously(currentInterval: number): Observable<string> {
    return interval(currentInterval).pipe(
      map(() => {
        if (this.tenLastResults.length >= 100) {
          this.tenLastResults.shift();
        }
        this.currentNumber = Math.floor(Math.random() * (2001)) - 1000;
        this.currentResult = this.applyRule(this.currentNumber);
        this.tenLastResults.push(this.currentResult);
        return this.currentResult;
      })
    );
  }

  increaseInterval(): void {
    const newInterval = this.currentIntervalSubject.getValue() + 100;
    this.currentIntervalSubject.next(newInterval);
  }

  decreaseInterval(): void {
    const currentInterval = this.currentIntervalSubject.getValue();
    if (currentInterval > 100) {
      this.currentIntervalSubject.next(currentInterval - 100);
    }
  }

  ngOnDestroy(): void {
    if (this.numberGenerationSubscription) {
      this.numberGenerationSubscription.unsubscribe();
    }
  }

  applyRule(number: number): string {
    if (number % 3 === 0 && number % 5 === 0) {
      return `Gestform`;
    } else if (number % 3 === 0) {
      return `Geste`;
    } else if (number % 5 === 0) {
      return `Forme`;
    } else {
      return number.toString();
    }
  }

}
