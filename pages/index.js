import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Main.module.css'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Main() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.welcome}>Hello!</h1>
        <button className={styles.enterPage}><Link href='/home'><FontAwesomeIcon icon={faArrowRight} /></Link></button>
      </main>

      <footer className={styles.footer}>
        <p>Created with <span>&#10084;</span> by Neuron Electronics</p>
      </footer>
    </div>
  )
}
