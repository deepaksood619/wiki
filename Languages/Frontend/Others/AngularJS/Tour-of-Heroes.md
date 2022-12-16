# Tour of Heroes

Created: 2018-01-29 15:47:55 +0500

Modified: 2018-12-23 18:57:53 +0500

---

## Directives -

A directive is a marker on a HTML tag that tells Angular to run or reference some JavaScript code.

- This is how we bind the behavior from HTML to JS

## Expressions -

- Allow to insert dynamic values into HTML

## Controllers -

- Controllers are where we define our app's behavior by defining functions and values.

## Two-way binding

[(ngModel)]is Angular's two-way data binding syntax.

The [*ngFor](https://angular.io/guide/template-syntax#ngFor) is Angular's*repeater*directive. It repeats the host element for each element in a list.

<li *[ngFor](https://angular.io/api/common/NgForOf)="let hero of heroes" (click)="onSelect(hero)">

This is an example of Angular's [event binding](https://angular.io/guide/template-syntax#event-binding) syntax.

<div *[ngIf](https://angular.io/api/common/NgIf)="selectedHero">

- Angular Framework not a library
- React is a library
- Opinionated
- Open-source
- Typescript used
- User RxJS internally
