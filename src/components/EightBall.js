import React, { useState } from "react";
import "./EightBall.css";


const answers = [
    "It is certain.",
    "Without a doubt.",
    "Yes - definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful."
  ];
  

const EightBall = (props) => {
    const genAnswer = () => {
        return answers[Math.floor(Math.random() * answers.length)];
    }

    const [msg, setMsg] = useState("Think of a Question");
    const [color, setColor] = useState("black");

    const handleClick = () => {
        const msg = genAnswer();
        setMsg(msg);
        setColor("green");
    }
    const reset = (event) => {
        event.stopPropagation();
        setMsg("Think of a Question");
        setColor("black");
    }
    return (
        <div className="EightBall" onClick={handleClick} style={{backgroundColor: color}}>
            <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <p className="EightBall-msg">{msg}</p>
            </div>
            <button className="EightBall-btn" onClick={reset}>Reset</button>
        </div>
    )
}

export default EightBall;