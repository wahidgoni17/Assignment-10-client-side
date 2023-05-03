import React from "react";
import Pdf from "react-to-pdf";

const ref = React.createRef();
const Blogs = () => {
  return (
    <div>
      <div className="py-5">
        <h1 className="text-5xl text-center font-bold">Blogs</h1>
        <Pdf targetRef={ref} filename="blogs.pdf">
          {({ toPdf }) => (
            <div className="text-end mx-20">
              <button onClick={toPdf} className="btn text-white">
                Generate PDF
              </button>
            </div>
          )}
        </Pdf>
      </div>
      <div ref={ref} className="px-20 py-10">
        <div className="mb-3">
          <h1 className="text-3xl font-semibold">
            Q1: Tell the differences between uncontrolled and controlled
            components?
          </h1>
          <p className="text-xl font-medium">
            Ans. In React, components refer to modular and reusable building
            blocks that can be combined to create larger systems or
            applications. Controlled components and uncontrolled components are
            two types of components that differ in how they manage and respond
            to user input. <br /> Uncontrolled components do not manage their
            own state, which means that their values are controlled entirely by
            the parent component. They are typically used for simple form inputs
            like text fields, where the value of the input is set by the user
            and then passed to the parent component via props or some other
            mechanism.
          </p>
        </div>
        <div className="mb-3">
          <h1 className="text-3xl font-semibold">
            Q2: How to validate React props using PropTypes?
          </h1>
          <p className="text-xl font-medium">
            Ans. React PropTypes is a way to ensure that the props passed to a
            component are of the correct type. Here's how you can validate React
            props using PropTypes: <br />
            1.Import PropTypes from the 'prop-types' package <br />
            2.Declare the PropTypes for the component by adding a static
            propTypes property to the component. <br />
            3.Declare the PropTypes for each prop by specifying its type and
            whether it's required. <br />
            4.Use the PropTypes in the component by referencing them through the
            props object
          </p>
        </div>
        <div className="mb-3">
          <h1 className="text-3xl font-semibold">
            Q3: Tell the difference between nodejs and express js.?
          </h1>
          <p className="text-xl font-medium">
            Ans. Node.js and Express.js are two popular technologies in the
            world of web development, and they serve different purposes. Here's
            the difference between Node.js and Express.js: <br />
            <span className="text-2xl my-5">Node js.</span> <br />
            1.Node.js is a JavaScript runtime environment built on the Chrome V8
            engine, which allows developers to run JavaScript on the
            server-side. <br />
            2.Node.js is often used for building scalable, high-performance web
            applications, chat applications, real-time applications, and other
            server-side applications. <br />
            3.Node.js provides a platform for building server-side applications
            with JavaScript, allowing developers to write server-side code using
            the same language as their client-side code. <br />
            4.Node.js has built-in modules for handling HTTP requests, file
            system operations, and other low-level tasks. <br />
            <span className="text-2xl my-5">Express js.</span> <br />
            1.Express.js is a popular web framework built on top of Node.js that
            simplifies the process of building web applications. <br />
            2.Express.js provides a robust set of features and middleware that
            makes it easier to handle routing, session management, templating,
            authentication, and other common web development tasks. <br />
            3.Express.js allows developers to quickly build RESTful APIs, web
            applications, and microservices using a simple and intuitive API.{" "}
            <br />
            4.Express.js is highly customizable, allowing developers to create
            complex web applications with ease.
          </p>
        </div>
        <div className="mb-3">
          <h1 className="text-3xl font-semibold">
            Q4: What is a custom hook, and why will you create a custom hook?
          </h1>
          <p className="text-xl font-medium">
            Ans. In React, a custom hook is a JavaScript function that starts
            with the prefix use, and it allows you to encapsulate logic that can
            be reused across multiple components. Custom hooks enable you to
            abstract out common functionality into reusable building blocks,
            just like React's built-in hooks, such as useState and useEffect.{" "}
            <br />
            1.Reusability: A custom hook can encapsulate logic that is commonly
            used in different parts of your application. Instead of copying and
            pasting the same code in multiple places, you can write a custom
            hook and reuse it in different components. <br />
            2.Abstraction: A custom hook can abstract out complex logic and
            provide a simple and easy-to-use interface for other components to
            consume. This can make your code more readable and maintainable.{" "}
            <br />
            3.Separation of concerns: By encapsulating certain logic in a custom
            hook, you can separate the concerns of your components and reduce
            their complexity. <br />
            4.Testing: Custom hooks are easy to test in isolation, making it
            easier to write unit tests for your application.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
