import React, { useEffect, useState } from "react";

const Task = () => {
  const [datas, setdatas] = useState();
  const [input, setinput] = useState();
  const [values, setValues] = useState();

  useEffect(() => {
    fetch("http://localhost:3002/task")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setdatas(data);
      });
  }, []);
  console.log(datas);

  console.log(input);

  function handleSubmit(e) {
    e.preventDefault();
    var array = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
    ];

    let text = input;

    for (let i = 0; i < array.length; i++) {
      if(  array[i] == text[i]){
         console.log(i);
      }
    }

    
  }

  return (
    <div className="container">
      <div className="background">
        {datas?.map((item) => (
          <div className="data">
            <h1>{item.setup}</h1>
            <p>{item.punchline}</p>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit}>
        <input value={input}
          onChange={(eve) => {
            setinput(eve.target.value);
          }}
        ></input>
        <button>Generate</button>
      </form>
    </div>
  );
};

export default Task;
