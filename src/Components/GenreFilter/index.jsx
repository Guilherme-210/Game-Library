import styles from "./style.module.css"

export default function GenreFilter({
  selectedGenre,
  setSelectedGenre,
  themesList,
}) {
  const handleFilterClick = (genre) => {
    if (selectedGenre === genre) {
      setSelectedGenre("")
    } else {
      setSelectedGenre(genre)
    }
  }

  return (
    <div className={styles.genreFilter}>
      <h3>Filtrar por gênero:</h3>
      <div className={styles.genreButtons}>
        {themesList.map((theme) => (
          <label
            key={theme.name}
            className={`${styles.checkboxLabel} ${
              selectedGenre === theme.name ? styles[theme.color] : ""
            }`}
          >
            <input
              type="checkbox"
              name="genre"
              value={theme.name}
              checked={selectedGenre === theme.name}
              onChange={() => handleFilterClick(theme.name)}
            />
            {theme.name}
          </label>
        ))}
      </div>
    </div>
  )
}
