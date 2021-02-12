import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Tweet from "./Tweet"

import path from 'path'
import fs from 'fs'

export default function Home({tweets}) {
  return (
    <div className={styles.container}>
      <h1>Hello, World!</h1>
      
      {tweets.map(tweet => <Tweet key = {tweet.id} text = {tweet.text} author= {tweet.author} date = {tweet.date} />)}
    </div>
  )
}

export async function getServerSideProps(){
  const filePath1 = path.join(process.cwd(), 'data.json')
  const tweets1 = JSON.parse(fs.readFileSync(filePath1))
  const filePath2 = path.join(process.cwd(), 'data2.json')
  const tweets2 = JSON.parse(fs.readFileSync(filePath2))
  const tweets = tweets1.concat(tweets2)
  return{
    props: {
      tweets
    }
  }
}