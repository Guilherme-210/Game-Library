import styles from "./style.module.css"

export default function InputLibrary({
  setValueInput,
  valueInput,
  idName,
  label,
  placeholder,
}) {
  return (
    <div className={styles.contentInput}>
      <label htmlFor={idName}>{label}</label>
      <input
        placeholder={placeholder}
        type="text"
        name={idName}
        id={idName}
        value={valueInput}
        onChange={(ev) => setValueInput(ev.target.value)}
      />
    </div>
  )
}
