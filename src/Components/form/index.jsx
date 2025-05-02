import Button from "../Button/index.jsx"
import Input from "../Input/index.jsx"
import Textarea from "../Textarea/index.jsx"
import Checkbox from "../Checkbox/index.jsx"

import styles from "./style.module.css"

export default function FormLibrary({
  handleSubmit,
  title,
  cover,
  textAlt,
  themes,
  setTitle,
  setCover,
  setTextAlt,
  textarea,
  setTextarea,
  setThemes,
}) {
  return (
    <form onSubmit={handleSubmit} className={styles.contentForm}>
      <div className={styles.divGrid1}>
        <Input
          valueInput={title}
          setValueInput={setTitle}
          idName="title"
          label="Título:"
          placeholder="Nome do jogo..."
        />
        <Input
          valueInput={cover}
          setValueInput={setCover}
          idName="cover"
          label="Capa:"
          placeholder="Link de capa (https://....-capa.jpeg)"
        />
        <Input
          valueInput={textAlt}
          setValueInput={setTextAlt}
          idName="textAlt"
          label="Texto alternativo:"
          placeholder="Texto alternativo..."
        />
      </div>
      <div className={styles.divGrid2}>
        <Textarea
          valueInput={textarea}
          setValueInput={setTextarea}
          idName="textarea"
          label="Sobre o jogo:"
          placeholder="Descreva o jogo adicionado"
        />
      </div>
      <div className={styles.divGrid3}>
        <Checkbox selectedThemes={themes} setSelectedThemes={setThemes} />
      </div>
      <div className={styles.divGrid4}>
        <Button type="submit" content="Adicionar a biblioteca" />
      </div>
    </form>
  )
}
