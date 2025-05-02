import styles from "./style.module.css"

export default function ButtonLibrary({ type, content, id, onClick }) {
  return (
    <div className={styles.content}>
      <button id={id} type={type} onClick={onClick}>
        {content}
      </button>
    </div>
  )
}
