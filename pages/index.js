import Head from 'next/head'
import styles from '../styles/Home.module.css'
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Home() {
  const [titlesData, setTitlesData] = useState([]);
  const fetchNewsTitles = () => {
    axios.get('https://newsapi.in/newsapi/news.php?key=SFOjv00zgwAIrXPhsx6EvF4gtI2YBN&category=hindi_state')
      .then((res) => {
        setTitlesData(res.data.News);
      })
  }
  useEffect(() => {
    fetchNewsTitles();
  }, []);
  console.log(titlesData);
  return (
    <div>
      <Head>
        <title>Top News in India</title>
        <meta name="description" content="News fetching using news api and axios" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="text-sky-800 text-6xl p-10 font-thin">Top News in India</div>
      {titlesData.map((title) => {
        return <>
          <div className="flex flex-1">
            <a href={title.url} target="_blank" rel="noreferrer" className="text-lg mx-auto w-max bg-gray-200 p-2 my-2 rounded-lg">{title.title}</a>
          </div>
        </>;
      })}
    </div>
  )
}
