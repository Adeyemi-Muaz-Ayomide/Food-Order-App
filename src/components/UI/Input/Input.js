import styles from './Input.module.css'

const Input = (props) => {

  return (
    <div className={styles.input}>
      <label>{props.label}</label>
      <input type="number" min='0' max='10' step='0' defaultValue='0' />
    </div>
  )
}

export default Input