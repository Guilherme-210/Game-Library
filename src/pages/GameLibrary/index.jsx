import { useState } from "react"
import FormLibrary from "../../Components/form/index.jsx"
import CardGame from "../../Components/CardGame/index.jsx"
import styles from "./style.module.css"

export default function GameLibrary() {
  const [title, setTitle] = useState("")
  const [cover, setCover] = useState("")
  const [textAlt, setTextAlt] = useState("")
  const [textarea, setTextarea] = useState("")
  const [themes, setThemes] = useState([])
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

    // gameLibrary.unshift(Game)
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
        <h1>Biblioteca de jogos</h1>
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
        <div className={styles.contentCardsImages}>
          {gameLibrary.map((Game) => (
            <CardGame
              key={Game.id}
              Game={Game}
              onClick={() => removeGame(Game.id)}
            />
          ))}
        </div>
        <div className="contentFilter">
          
        </div>
      </div>
    </main>
  )
}
