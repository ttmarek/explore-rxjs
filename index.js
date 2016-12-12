const Rx = require('rxjs/Rx');

/* let count = 0;
 * const rate = 1000;
 * let lastClick = Date.now() - rate;
 * const btn = document.querySelector('button');
 * btn.addEventListener('click', () => {
 *   if (Date.now() - lastClick >= rate) {
 *     console.log(`Clicked ${++count} times`);
 *     lastClick = Date.now();
 *   }
 * });*/

/* const btn = document.querySelector('button');
 *
 * Rx.Observable.fromEvent(btn, 'click')
 *   .throttleTime(1000)
 *   .scan(count => count + 1, 0)
 *   .subscribe(count => console.log(`Clicked ${count} times`));*/

// DO YOU ALWAYS NEED TO SUBSCRIBE TO AN OBSERVABLE?
// WHY DIDN'T WE HAVE TO SUBSCRIBE ABOVE?

/* const observable = Rx.Observable.create((observer) => {
 *   observer.next(1);
 *   observer.next(2);
 *   observer.next(3);
 *   setTimeout(() => {
 *     observer.next(4);
 *     observer.complete();
 *   }, 3000);
 * });
 *
 * console.log('just before subscribe');
 * observable.subscribe({
 *   next: x => console.log('got value: ', x),
 *   error: err => console.error('got an error: ', err),
 *   complete: () => console.log('done with the observer'),
 * });
 * console.log('just after subscribe');*/

/* function foo() {
 *   console.log('Hello');
 *   return 42;
 * }
 * const x = foo.call(); // same as foo()
 * console.log(x);
 * const y = foo.call(); // same as foo()
 * console.log(y);*/

/* const foo = Rx.Observable.create((observer) => {
 *   console.log('Hello');
 *   setTimeout(() => {
 *     observer.next(42);
 *   }, 5000);
 * });*/

/* console.log('before sub');
 * foo.subscribe(function(x) {
 *   console.log(x);
 * });
 * console.log('after sub');*/

/* foo.subscribe(function(y) {
 *   console.log(y);
 * });*/

// **************************************************
// calling a function: "give me some value synchronously"
// observable.subscribe(): "give me any number of values,
//                          either synchronously or asynchrously"
// **************************************************

/* const observable = Rx.Observable.create((observer) => {
 *   observer.next('hello');
 *   setTimeout(() => {
 *     observer.next('world');
 *   }, 3000);
 * });
 *
 * const subscription = observable.subscribe(x => console.log(x));
 * subscription.unsubscribe();*/

// **************************************************
// if you unsubscribe before something in the observable happens
// the the subscriber won't be called when that something happens
// **************************************************

// When subscribing to an observable
const observable = Rx.Observable.create((observer) => {
  observer.next(1);
});
// This
observable.subscribe({
  next: x => console.log('Observer got a next value: ' + x),
  error: err => console.error('Observer got an error: ' + err),
  complete: () => console.log('Observer got a complete notification'),
});
// And this
observable.subscribe(
  x => console.log('Observer got a next value: ' + x),
  err => console.error('Observer got an error: ' + err),
  () => console.log('Observer got a complete notification')
);
// are both valid:
/* Internally in observable.subscribe, it will create an Observer object
 * using the first callback argument as the next handler. All three types
 * of callbacks may be provided as arguments:*/
