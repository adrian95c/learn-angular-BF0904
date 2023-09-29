# Learn Angular Basic & Fundamental

The objective of this project is to learn basic and fundamental of Angular.

## Introduction

Angular is an open-source web application framework designed to simplify the process of building dynamic, single-page web applications (SPAs) and complex user interfaces.

SPA stands for "Single Page Application." It is a web application or website that loads and interacts with the user by dynamically rewriting the current web page, rather than loading entire new pages from the server. In SPAs, the initial HTML, CSS, and JavaScript resources are loaded once at the beginning of the user's session, and subsequent interactions or data retrieval are handled through AJAX (Asynchronous JavaScript and XML) requests or other technologies, without requiring a full page refresh.

### Key features and concepts of Angular include:

![alt text](https://github.com/adrian95c/learn-angular-BF0904/blob/main/src/assets/images/angular-structure.jpg)

1. Component-Based Architecture: 

   Angular applications are built using a component-based architecture.
   Components are self-contained, reusable building blocks that encapsulate the structure, behavior, and appearance of a part of the user interface.

2. Directives: 

   Angular has built-in directives that allow developers to extend HTML with custom behavior. 
   For example, the ngFor directive is used for iterating over lists, and the ngIf directive is used for conditional rendering.

3. Services & Dependency Injection: 

   Services in Angular are used to encapsulate and share functionality across different parts of an application. 
   They are often used for tasks like making HTTP requests, handling business logic, or managing state.

   Angular's dependency injection system is used to manage the dependencies of components and services, making it easier to create and test complex applications. 
   It promotes modularity and reusability.

4. Router: 

   Angular provides a router module that allows developers to create navigation and handle routing within a single-page application. 
   This enables the development of multi-view applications with different views and URLs.

5. Observables: 

   Angular leverages RxJS (Reactive Extensions for JavaScript) to work with asynchronous operations and manage data streams. 
   Observables are a fundamental part of handling events, data, and asynchronous operations in Angular.

6. Forms: 

   Angular provides robust support for both template-driven forms and reactive forms. 
   This allows developers to create complex forms with data validation and binding.

7. Pipes <TBU>
8. Http <TBU>
9. Authentication <TBU>
10. Optimization & NgModules <TBU>
11. Deployment <TBU>
12. Animations & Testing <TBU>


### Difference Between Angular and Angular JS

Angular and AngularJS are both web application development frameworks, but they are significantly different in terms of architecture, features, and the technologies they are based on. 
Here are the key differences between Angular and AngularJS:

1. Architecture:

   **Angular** (commonly referred to as "Angular 2+" or just "Angular") is a complete rewrite of AngularJS. 
   It uses a component-based architecture, where an application is built by composing reusable components. 
   Components are the core building blocks, and they encapsulate the HTML, CSS, and behavior of a part of the user interface.
 
   **AngularJS** (commonly referred to as "Angular 1") uses a controller-based architecture. 
   It relies on controllers and directives to define the structure and behavior of an application.

2. Language:

   **Angular** is primarily written in TypeScript, a statically typed superset of JavaScript. 
   TypeScript provides strong typing, improved tooling, and helps catch errors at compile time.

   **AngularJS** uses JavaScript for development, without the benefit of TypeScript's static typing.

3. Performance:

   **Angular** is known for its improved performance compared to AngularJS. 
   It uses a virtual DOM and offers better change detection mechanisms, making updates to the UI more efficient.

   **AngularJS**'s two-way data binding could sometimes lead to performance issues, especially in complex applications, as it had to watch for changes in the entire scope.

## Basic

### Data Binding

![alt text](https://github.com/adrian95c/learn-angular-BF0904/blob/main/src/assets/images/data-binding.jpg)

String Interpolation : It is used to just display a piece of data in HTML, such as displaying a title or a name.

Property Binding :It bind a property of a DOM object, for example the hidden, innertext, setAttribute, replaceChild property (etc.), to some data value.

