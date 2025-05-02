import styles from "./style.module.css"

const themesList = [
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


export default function CheckboxThemes({ selectedThemes, setSelectedThemes }) {
  const toggleTheme = (theme) => {
    if (selectedThemes.includes(theme)) {
      setSelectedThemes(selectedThemes.filter((t) => t !== theme))
    } else {
      setSelectedThemes([...selectedThemes, theme])
    }
  }

  return (
    <div>
      <p>Gênero</p>
      <div className={styles.containerCheckbox}>
        {themesList.map((theme) => (
          <label
            key={theme.name}
            className={`${styles.checkboxLabel} ${
              selectedThemes.includes(theme.name) ? styles[theme.color] : ""
            }`}
          >
            <input
              type="checkbox"
              value={theme.name}
              checked={selectedThemes.includes(theme.name)}
              onChange={() => toggleTheme(theme.name)}
            />
            {theme.name}
          </label>
        ))}
      </div>
    </div>
  )
}
