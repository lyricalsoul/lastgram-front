import Link from 'next/link'
import Hamburger from './Hamburger'
import styles from './AppBar.module.css'
import { useState, useEffect } from 'react'

export default function AppBar () {
  const [display, setDisplay] = useState(false)
  useEffect(() => {
  })
  
  return <div className={styles.navbar}>
    <h3>lastgram.</h3>
    <Hamburger onClick={() => setDisplay(!display)}/>
  </div>
}
