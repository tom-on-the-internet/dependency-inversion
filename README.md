# Dependency Inversion 🔀

This repo is sample code for a video on dependency inversion.

The video can be seen [here](https://www.youtube.com/watch?v=SPnwT-CxTZY).

## Dependency Inversion Principle

The Dependency Inversion Principle (DIP) states that high level modules should not depend on low level modules; both should depend on abstractions. Abstractions should not depend on details. Details should depend upon abstractions.

## ❤ Advantages of Dependency Inversion

1. Easier to unit test.
2. Can clearly see the responsibilities of a class.
3. Easier to refactor.
4. Easier to reuse.
5. Feel confident about your code.
6. Reduce coupling.

## 😨 Disadvantages of Dependency Inversion

1. Cognitive load can be higher. Especially at first.
2. Can be more challenging (not impossible) without a dependency injection framework.

## Example Code

This repo has 4 files in the `src` directory.

`no-di.js` is a file not using dependency inversion.

`yes-di.js` is a file using dependency inversion but without type information.

`yes-di-types.ts` is a file using dependency inversion with type information.

`yes-di-types-and-abstraction.ts` is a file using dependency inversion with type information and abstraction.

## Example Code Explainer

We have a `PaymentService` which we use to make sure payments are sent.

It also notifies users once payments are sent.

Finally, the service also logs errors in the event of a failure while sending a payment.
