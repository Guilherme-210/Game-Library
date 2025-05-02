import styles from "./style.module.css"

export default function TextareaLibrary({
  setValueInput,
  valueInput,
  idName,
  label,
  placeholder,
}) {
  return (
    <div className={styles.contentTextarea}>
      <label htmlFor={idName}>{label}</label>
      <textarea
        type="text"
        name={idName}
        id={idName}
        value={valueInput}
        onChange={(ev) => setValueInput(ev.target.value)}
        placeholder={placeholder}
      />
    </div>
  )
}
