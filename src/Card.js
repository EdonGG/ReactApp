import React from "react";
import logo from "./logo.svg";
import "./Card.scss";

const data = [
  {
    date: "3.3.0 (14/05/2018)",
    type: "New",
    typeColor: "#1bc11b",
    img: logo,
    name: "Kevin Joe",
    desc: "Does the domain extension math the language of the domain name?Does the domain extension math the language of the domain name?Does the domain extension math the language of the domain name?Does the domain extension math the language of the domain name?",
  },
  {
    date: "3.1.0 (20/05/2015)",
    type: "Fix",
    typeColor: "#1b59c1",
    img: logo,
    name: "Kevin Joe",
    desc: "Does the domain extension math the language of the domain name?Does the domain extension math the language of the domain name?Does the domain extension math the language of the domain name?Does the domain extension math the language of the domain name?",
  },
  {
    date: "3.1.0 (20/05/2014)",
    type: "Improvemnt",
    typeColor: "#c51bc3",
    img: logo,
    name: "Kevin Joe",
    desc: "Does the domain extension math the language of the domain name?Does the domain extension math the language of the domain name?Does the domain extension math the language of the domain name?Does the domain extension math the language of the domain name?",
  },
  {
    date: "3.3.0 (14/05/2018)",
    type: "New",
    typeColor: "#1bc11b",
    img: logo,
    name: "Kevin Joe",
    desc: "Does the domain extension math the language of the domain name?Does the domain extension math the language of the domain name?Does the domain extension math the language of the domain name?Does the domain extension math the language of the domain name?",
  },
  {
    date: "3.1.0 (20/05/2015)",
    type: "Fix",
    typeColor: "#1b59c1",
    img: logo,
    name: "Kevin Joe",
    desc: "Does the domain extension math the language of the domain name?Does the domain extension math the language of the domain name?Does the domain extension math the language of the domain name?Does the domain extension math the language of the domain name?",
  },
  {
    date: "3.1.0 (20/05/2014)",
    type: "Improvemnt",
    typeColor: "#c51bc3",
    img: logo,
    name: "Kevin Joe",
    desc: "Does the domain extension math the language of the domain name?Does the domain extension math the language of the domain name?Does the domain extension math the language of the domain name?Does the domain extension math the language of the domain name?",
  },
  {
    date: "3.3.0 (14/05/2018)",
    type: "New",
    typeColor: "#1bc11b",
    img: logo,
    name: "Kevin Joe",
    desc: "Does the domain extension math the language of the domain name?Does the domain extension math the language of the domain name?Does the domain extension math the language of the domain name?Does the domain extension math the language of the domain name?",
  },
  {
    date: "3.1.0 (20/05/2015)",
    type: "Fix",
    typeColor: "#1b59c1",
    img: logo,
    name: "Kevin Joe",
    desc: "Does the domain extension math the language of the domain name?Does the domain extension math the language of the domain name?Does the domain extension math the language of the domain name?Does the domain extension math the language of the domain name?",
  },
  {
    date: "3.1.0 (20/05/2014)",
    type: "Improvemnt",
    typeColor: "#c51bc3",
    img: logo,
    name: "Kevin Joe",
    desc: "Does the domain extension math the language of the domain name?Does the domain extension math the language of the domain name?Does the domain extension math the language of the domain name?Does the domain extension math the language of the domain name?",
  },
];

const Card = () => {
  return (
    <div className="card_wrapper">
      {data.map((item, i) => {
        return (
          <div className="card_content" key={i}>
            <p>{item.date}</p>
            <div className="head">
              <p
                className="type"
                style={{
                  backgroundColor: item.typeColor,
                }}
              >
                {item.type}
              </p>
              <div className="person">
                <img src={item.img} alt="" />
                <p>{item.name}</p>
              </div>
            </div>

            <p className="desc">{item.desc}</p>
            <button className="download">Download</button>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
