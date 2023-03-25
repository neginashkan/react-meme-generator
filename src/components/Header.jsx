import troll_face from "../images/Troll-Face.png";
function Header(){
    return (
      <header className="Header">
        <img className="troll-face" src={troll_face} alt="smiley face" />
        <h2 className="heading">Meme Generator</h2>
      </header>
    );
}
export default Header