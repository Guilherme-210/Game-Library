import ButtonLibrary from "../Button/index.jsx"
import styles from "./style.module.css"

export default function CardGame({ Game, onClick }) {
  const themeColorMap = {
    Ação: styles.action,
    Aventura: styles.adventure,
    Terror: styles.horror,
    RPG: styles.rpg,
    Corrida: styles.racing,
    Esportes: styles.sports,
    Plataforma: styles.platform,
    Puzzle: styles.puzzle,
    Simulação: styles.simulation,
    Estratégia: styles.strategy,
    MMO: styles.mmo,
    FPS: styles.fps,
    Luta: styles.fighting,
    Stealth: styles.stealth,
    Sandbox: styles.sandbox,
    Sobrevivência: styles.survival,
    Música: styles.music,
    Indie: styles.indie,
  }


  return (
    <div className={styles.content}>
      <div className={styles.contentCard}>
        <div className={styles.divImage}>
          <img
            className={styles.gameImage}
            src={Game.urlCover}
            alt={Game.textAlt}
          />
        </div>
        <div className={styles.divContent}>
          <ButtonLibrary content="Apagar" onClick={onClick} />

          <h3>{Game.title}</h3>
          <p>{Game.descripition}</p>
        </div>
      </div>
      <div className={styles.containerThemes}>
        {Game.themes.map((theme, index) => {
          const themeClass = themeColorMap[theme]

          return (
            <span key={index} className={`${styles.themesSpan} ${themeClass}`}>
              <p>{theme}</p>
            </span>
          )
        })}
      </div>
    </div>
  )
}
