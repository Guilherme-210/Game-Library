import { useState } from "react"
import FormLibrary from "../../Components/form/index.jsx"
import CardGame from "../../Components/CardGame/index.jsx"
import GenreFilter from "../../Components/GenreFilter/index.jsx"
import styles from "./style.module.css"

const buttonsFilter = [
  { name: "Ação", color: "action" },
  { name: "Aventura", color: "adventure" },
  { name: "Terror", color: "horror" },
  { name: "RPG", color: "rpg" },
  { name: "Corrida", color: "racing" },
  { name: "Esportes", color: "sports" },
  { name: "Plataforma", color: "platform" },
  { name: "Puzzle", color: "puzzle" },
  { name: "Simulação", color: "simulation" },
  { name: "Estratégia", color: "strategy" },
  { name: "MMO", color: "mmo" },
  { name: "FPS", color: "fps" },
  { name: "Luta", color: "fighting" },
  { name: "Stealth", color: "stealth" },
  { name: "Sandbox", color: "sandbox" },
  { name: "Sobrevivência", color: "survival" },
  { name: "Música", color: "music" },
  { name: "Indie", color: "indie" },
]

export default function GameLibrary() {
  const [title, setTitle] = useState("")
  const [cover, setCover] = useState("")
  const [textAlt, setTextAlt] = useState("")
  const [textarea, setTextarea] = useState("")
  const [themes, setThemes] = useState([])
  const [selectedGenre, setSelectedGenre] = useState("")
  const [gameLibrary, setGameLibrary] = useState(() => {
    const storageGames = localStorage.getItem("obc-game-lib")
    if (!storageGames) return []
    return JSON.parse(storageGames)
  })

  

  const removeGame = (id) => {
    setGameLibrary((state) => {
      const newState = state.filter((game) => game.id !== id)
      localStorage.setItem("obc-game-lib", JSON.stringify(newState))
      return newState
    })
  }

  const filteredGames = selectedGenre
    ? gameLibrary.filter((game) => game.themes.includes(selectedGenre))
    : gameLibrary

  const handleSubmit = (ev) => {
    ev.preventDefault()

    const Game = {
      id: Date.now(),
      title: title,
      urlCover: cover,
      textAlt: textAlt,
      descripition: textarea,
      themes: themes,
    }
    console.log(Game)

    setGameLibrary((state) => {
      const newState = [Game, ...state]
      localStorage.setItem("obc-game-lib", JSON.stringify(newState))

      return newState
    })

    setTitle("")
    setCover("")
    setTextAlt("")
    setTextarea("")
  }

  return (
    <main>
      <div className={styles.content}>
        <div className={styles.contentForm}>
          <FormLibrary
            handleSubmit={handleSubmit}
            title={title}
            cover={cover}
            textAlt={textAlt}
            textarea={textarea}
            setTitle={setTitle}
            setCover={setCover}
            setTextAlt={setTextAlt}
            setTextarea={setTextarea}
            themes={themes}
            setThemes={setThemes}
          />
        </div>
        <div>
          <div className={styles.divScrollbar}>
            {/* <div className={styles.contentCardsImages}> */}
              {filteredGames.map((Game) => (
                <CardGame
                  filteredGames={filteredGames}
                  key={Game.id}
                  Game={Game}
                  onClick={() => removeGame(Game.id)}
                />
              ))}
            {/* </div> */}
          </div>
        </div>
        <div className={styles.contentFilter}>
          <GenreFilter
            themes={themes}
            setThemes={setThemes}
            selectedGenre={selectedGenre}
            setSelectedGenre={setSelectedGenre}
            themesList={buttonsFilter}
          />
        </div>
      </div>
    </main>
  )
}
