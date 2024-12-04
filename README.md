# React Accordion Component

A simple accordion component built with React, featuring responsive design and customizable styles.

## Installation

To install the React Accordion component, you can use npm or yarn.

Using npm:

```bash
npm install react-accordion-component
```

const faqs = [
{
title: 'What is frontend development?',
text: 'Frontend development involves creating the visual and interactive parts of a website or app that users directly interact with, using technologies like HTML, CSS, and JavaScript.',
},
{
title: 'What skills are essential for a frontend developer?',
text: 'Core skills include proficiency in HTML, CSS, and JavaScript, knowledge of frameworks like React or Vue, and familiarity with tools like Git and design principles.',
},
// Add more FAQs as needed
];

function App() {
return (

<div>
<h1 className="header">FAQ's</h1>
<p>Some common questions about frontend development.</p>

      <hr />
      <Accordion data={faqs} />
    </div>

);
}

export default App;
