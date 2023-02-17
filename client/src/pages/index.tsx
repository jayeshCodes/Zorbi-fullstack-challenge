import { useRef, useState } from "react";

import Image from "next/image";
import User from '../components/User';
import Search from '../components/Search'

import styles from '../styles/Home.module.css'

const Home=()=> {

return(
  <div className={styles.main}>
    <h1>GitHub Users Search</h1>
    <Search />
  </div>
  )
}

export default Home;