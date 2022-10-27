import { useState } from "react";
import "./styles.css";

export default function App() {
  const [emoji, setEmoji] = useState("");
  const [meaning, setMeaning] = useState("translation will appear here..");
  const emojiDictionary = {
    "😊": "Smiling",
    "😳": "disbelief",
    "😔": "sad",
    "🥡": "takeout box",
    "❤️": "love",
    "😑": "annoyance",
    "💘": "heart and arrow",
    "🥭": "mango",
    "🏇":
      "horse racing" /** add some more to show how the app now expands when there's new data */
  };
  const clickHandler = (emoji) => {
    setMeaning(emojiDictionary[emoji]);
  };
  const changeHandler = (e) => {
    setEmoji(e.target.value);
    if (e.target.value in emojiDictionary) {
      setMeaning(emojiDictionary[e.target.value]);
    } else {
      setMeaning("Emoji not recongnized!");
    }
  };
  const emojis = Object.keys(emojiDictionary);
  return (
    <div className="App">
      <h1>inside outttttt</h1>
      <input onChange={changeHandler} placeholder="Search your emoji" />
      <h2>{emoji}</h2>
      <h3>{meaning}</h3>
      {emojis.map((emoji) => {
        return (
          <span onClick={() => clickHandler(emoji)} className="emoji">
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
