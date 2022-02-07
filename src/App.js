import logo from "./logo.svg";
import "./App.scss";
import Card from "./Card";
import Drop from "./Drop";

const data = [
  {
    image: logo,
    title: "The TLD",
    paragrapgh:
      "Does the domain extension math the language of the domain name?",
  },
  {
    image: logo,
    title: "The TLD",
    paragrapgh:
      "Does the domain extension math the language of the domain name?",
  },
  {
    image: logo,
    title: "The TLD",
    paragrapgh:
      "Does the domain extension math the language of the domain name?",
  },
  {
    image: logo,
    title: "The TLD",
    paragrapgh:
      "Does the domain extension math the language of the domain name?",
  },
  {
    image: logo,
    title: "The TLD",
    paragrapgh:
      "Does the domain extension math the language of the domain name?",
  },
  {
    image: logo,
    title: "The TLD",
    paragrapgh:
      "Does the domain extension math the language of the domain name?",
  },
  {
    image: logo,
    title: "The TLD",
    paragrapgh:
      "Does the domain extension math the language of the domain name?",
  },
  {
    image: logo,
    title: "The TLD",
    paragrapgh:
      "Does the domain extension math the language of the domain name?",
  },
  {
    image: logo,
    title: "The TLD",
    paragrapgh:
      "Does the domain extension math the language of the domain name?",
  },
];

export const dropitem = [
  {
    title: "Why park a domain name in Parkname?",
    paragraph:
      "Parkname is athe leading industry standard for domain name parking and momentization services. We offer a wide a wide variety of services to help you achieve success.",
  },
];

const Task = ({ title }) => <h1 className="task">{title}</h1>;

function App() {
  return (
    <div className="wrapper">
      <Task title="Task 1" />
      <div className="item1_wrapper">
        {data.map((item, i) => {
          return (
            <div className="item1" key={i}>
              <img src={item.image} className="image" alt="" />
              <div className="item1_content">
                <h6>{item.title}</h6>
                <p>{item.paragrapgh}</p>
              </div>
            </div>
          );
        })}
      </div>
      <Card />
      <Task title="Task 2" />
      {dropitem.map((item, i) => (
        <Drop title={item.title} paragraph={item.paragraph} />
      ))}
    </div>
  );
}

export default App;
