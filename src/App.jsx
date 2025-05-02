// import Header from "./Components/Header/index.jsx"
// import Footer from "./Components/Footer/index.jsx"

import GameLibrary from "./pages/GameLibrary/index.jsx"

export default function App() {
  return (
    <>
      <h1
        style={{
          fontSize: "2rem",
          textAlign: "center",
          color: "#fff",
          backgroundColor: "#222",
          padding: "1rem",
          marginBottom: "2rem",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
        }}
      >
        Biblioteca de jogos
      </h1>
      <main>
        <GameLibrary />
      </main>
    </>
  )
}
