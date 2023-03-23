import "./App.css";
import Profile from "./profile/Profile";
import myImage from "./profile/image.jpg";

function App() {
  const handleName = (name) => {
    alert(`Hello ${name}`);
  };

  return (
    <div className="App">
      <Profile
        fullName="Fatima Zahra Aknioune"
        bio="Je m'appelle Fatima Zahra Aknioune et je suis une étudiante passionnée de 20 ans en développement informatique, 
        avec une passion particulière pour le développement web. Depuis que j'ai découvert l'informatique, 
        j'ai été fascinée par l'idée de créer des sites web et des applications pour aider les gens à résoudre des problèmes et à améliorer leur vie quotidienne. 
        Mon amour pour le développement web m'a conduit à apprendre divers langages de programmation comme HTML, CSS, JavaScript et PHP, 
        ainsi qu'à me tenir au courant des dernières tendances en matière de design et de développement web."
        profession="Web Developpement"
        handleName={handleName}
      >
        <img
          src={myImage}
          alt="Profile user"
          style={{ borderRadius: "50%", width: 200, height: 200 }}
        />
      </Profile>
    </div>
  );
}

export default App;

