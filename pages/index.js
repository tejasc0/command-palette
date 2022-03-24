import Head from 'next/head'
import styles from '../styles/Home.module.css'
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  var options = {
    method: 'GET',
    url: 'https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/asia',
    headers: {
      'X-RapidAPI-Host': 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com',
      'X-RapidAPI-Key': '8961fe1acbmsh952957195cbadadp19efa7jsnb7463e8618f2'
    }
  };

  axios.request(options).then(function (response) {
    setLoading(false);
    setData(response.data);
  }).catch(function (error) {
    console.error(error);
  });
  return (
    <div>
      <Head>
        <title>COVID19 | Stats</title>
        <meta name="description" content="get all Asian countries covid-19 data." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="text-sky-800 md:text-6xl text-3xl md:m-10 m-4 font-thin">COVID19 | Stats</div>

      {loading && <div className="text-2xl mx-auto w-max md:my-10 my-4">Loading...</div>}
      {data.map((item) => {
        return <div key={item.id}>
          <div className="flex flex-col">
            <div className="flex flex-col mx-auto w-max bg-gray-200 p-2 my-2 rounded-lg">

              <div className="">Country: {item.Country}</div>
              <div className="">Continent: {item.Continent}</div>
              <div className="">Continent: {item.Continent}</div>
              <div className="">Recovery Proporation: {item.Recovery_Proporation}</div>
              <div className="">Population: {item.Population}</div>
              <div className="">Deaths per 1Mn: {item.Deaths_1M_pop}</div>
            </div>
          </div>
        </div>;
      })}

    </div>
  )
}
