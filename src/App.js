import { useState } from "react";
import "./styles.css";

export default function App() {
  const [emoji, setEmoji] = useState("");
  const [meaning, setMeaning] = useState("Translation will appear here..");
  const emojiDictionary = {
    "💘": "Heart and arrow",
    "🥭": "Mango",
    "🏇": "Horse racing",
    "😊": "Smiling",
    "😳": "Disbelief",
    "😔": "Sad",
    "🥡": "Takeout box",
    "❤️": "Love",
    "😑": "Annoyance",
    "🔥": "Fire",
    "🎂": "Birthday"
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
      <h1 className="heading">YOUR EMOJI DICTIONARY :)</h1>
      <input
        className="input"
        onChange={changeHandler}
        placeholder="Search your emoji"
      />
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
