import styles from './Hamburger.module.css'

export default function Hamburger(...props) {
  return <div className={styles.hamburger} {...props}>
    <span className={styles.bar}></span>
    <span className={styles.bar}></span>
    <span className={styles.bar}></span>
  </div>
}