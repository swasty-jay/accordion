import { useState } from "react";
import "./index.css";

const faqs = [
  {
    title: "What is frontend development?",
    text: "Frontend development involves creating the visual and interactive parts of a website or app that users directly interact with, using technologies like HTML, CSS, and JavaScript.",
  },
  {
    title: "What skills are essential for a frontend developer?",
    text: "Core skills include proficiency in HTML, CSS, and JavaScript, knowledge of frameworks like React or Vue, and familiarity with tools like Git and design principles.",
  },
  {
    title: "How is frontend different from backend development?",
    text: "Frontend focuses on the user interface and experience, while backend handles server-side logic, databases, and APIs.",
  },
  {
    title: "Can I learn both frontend and backend development simultaneously?",
    text: "Yes, it's essential to have a strong foundation in one area before moving on to the other. However, it's recommended to focus on one area and work on projects that require it.",
  },
];

export default function App() {
  return (
    <div>
      <h1 className="header">FAQ's</h1>
      <p className="sub-header">FAQ's about frontend development.</p>

      <Accordion data={faqs} />
    </div>
  );
}

function Accordion({ data }) {
  const [currentOpen, setcurrentOpen] = useState(null);
  return (
    <div className="accordion">
      {data.map((el, i) => (
        <AccordionItem
          currentOpen={currentOpen}
          onopen={setcurrentOpen}
          title={el.title}
          num={i}
          key={el.title}
        >
          {el.text}
        </AccordionItem>
      ))}
    </div>
  );
}

function AccordionItem({ num, title, children, currentOpen, onopen }) {
  const isopen = num === currentOpen;
  function handleToggle() {
    onopen(isopen ? null : num);
  }
  return (
    <div className={`item ${isopen ? "open" : ""}`} onClick={handleToggle}>
      <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className="title">{title}</p>
      <p className="icon">{isopen ? "-" : "+"}</p>

      {isopen && <div className="content-box">{children}</div>}
    </div>
  );
}
