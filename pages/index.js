import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link';
import data from '../data/countriesdata.json'

export default function Home() {

  return (
    <div>
      <Head>
        <title>Command palette</title>
        <meta name="description" content="Keyboard first navigation through command palette" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="text-sky-800 text-6xl m-10 font-thin">Command Palette</div>
      <div className="text-sky-800 mx-16">Keyboard first navigation through command palette</div>

      <div className="text-2xl mx-auto w-max my-10">Press Ctrl + k</div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
        {data.countries.map((item) => {
          return <div key={item.country} className="ml-6 hover:bg-orange-400 cursor-pointer p-3 m-2 rounded-lg">
            <Link href={'/country/' + item.country.replace(/\s+/g, '-').toLowerCase()}>
              {item.country}
            </Link>
          </div>;
        })}
      </div>

    </div>
  )
}
