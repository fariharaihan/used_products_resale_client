import React from 'react';

const Blog = () => {
    return (
        <div className='my-20'>
            <div className='border border-violet-900 m-4 p-3'>
                <h2>Question: 1</h2>
                <h3>What are the different ways to manage a state in a React application?</h3>
                <h3>Answer:</h3>
                <div>
                    <p>There are many ways to manage a state in a React application</p>
                    <p> 1. Logical state.</p>
                    <p>2. Global state.</p>
                    <p>3. Server state.</p>
                    <p>4. Navigation state.</p>
                    <p>5. URL state.</p>
                    <p>6. form state.</p>
                </div>
            </div>
            <div className='border border-violet-900 m-4 p-3'>
                <h2>Question: 2</h2>
                <h3>How does prototypical inheritance work?</h3>
                <h3>Answer:</h3>
                <p>
                    The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object. The protatypal chain ends when we reach a prototype that has null for its own prototype.
                </p>
            </div>
            <div className='border border-violet-900 m-4 p-3'>
                <h2>Question: 3</h2>
                <h3>What is a unit test? Why should we write unit tests?</h3>
                <h3>Answer:</h3>
                <div>
                    <p>
                        A unit test is a way of testing a unit - the smallest piece of code that can be logically isolated in a system. In most programming languages, that is a function, a subroutine, a method or property. The isolated part of the definition is important.
                    </p>
                    <p>
                        They enable you to catch bugs early in the development process. Automated unit tests help a great deal with regression testing. They detect code smells in your codebase. For example, if you're having a hard time writing unit tests for a piece of code, it might be a sign that your function is too complex.
                    </p>

                </div>
            </div>
            <div className='border border-violet-900 m-4 p-3'>
                <h2>Question: 4</h2>
                <h3>React vs. Angular vs. Vue?</h3>
                <h3>Answer:</h3>
                <p><span className='text-xl font-bold'>React: </span>
                    React offers a Getting Started guide that should help one set up React in about an hour. The documentation is thorough and complete, with solutions to common issues already present on Stack Overflow. React is not a complete framework and advanced features require the use of third-party libraries. This makes the learning curve of the core framework not so steep but depends on the path you take with additional functionality. However, learning to use React does not necessarily mean that you are using the best practices.
                </p>
                <p>
                    <span className='text-xl font-bold'>Angular: </span>
                    Angular has a steep learning curve, considering it is a complete solution, and mastering Angular requires you to learn associated concepts like TypeScript and MVC. Even though it takes time to learn Angular, the investment pays dividends in terms of understanding how the front end works.
                </p>
                <p>
                    <span className='text-xl font-bold'>Vue: </span>
                    Vue provides higher customizability and hence is easier to learn than Angular or React. Further, Vue has an overlap with Angular and React with respect to their functionality like the use of components. Hence, the transition to Vue from either of the two is an easy option. However, simplicity and flexibility of Vue is a double-edged sword — it allows poor code, making it difficult to debug and test.
                </p>
            </div>
        </div>
    );
};

export default Blog;