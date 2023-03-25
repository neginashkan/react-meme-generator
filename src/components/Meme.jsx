import memeDataApi from "../javaScript/memesData.js";
import { useState } from "react";
function Meme() {
  const [allMemeImages, setAllMemeImages] = useState(memeDataApi.data.memes);
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
    name: "",
  });
  function handleChange(event){
    const {value,name}= event.target
    setMeme(pervMeme=>({
      ...pervMeme,
      [name]:value
    }));
  }
  function getMemeImage(event) {
    event.preventDefault();
    const randomIndex = Math.floor(Math.random() * allMemeImages.length),
      url = allMemeImages[randomIndex].url,
      name = allMemeImages[randomIndex].name;
    setMeme((pervState) => ({ ...pervState, randomImage: url, name: name }));
  }

  return (
    <main className="Meme-Generator">
      <form>
        <input
          className="meme-input"
          type="text"
          onChange={handleChange}
          value={meme.topText}
          name="topText"
        />
        <input
          className="meme-input"
          type="text"
          onChange={handleChange}
          value={meme.bottomText}
          name="bottomText"
        />
        <input
          className="meme-button"
          type="submit"
          value="Get a new meme image  🖼"
          onClick={getMemeImage}
        />
      </form>
      <div className="meme">
        <img
          className="image-meme meme--image"
          src={meme.randomImage}
          alt={meme.name}
          title={meme.name}
        />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
}
export default Meme;
