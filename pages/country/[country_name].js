import Link from 'next/link'
import { useRouter } from 'next/router'
import data from '../../data/countriesdata.json'

const Test = () => {
  const router = useRouter()
  const { country_name } = router.query
  const countriesData = data.countries.filter((item) => item.country.replace(/\s+/g, '-').toLowerCase() === router.query.country_name)
  console.log(countriesData)
  return (
    <div>
      {countriesData.map((item) => {
        return <div key={item.country}>
          <button className="bg-gray-300 shadow-md cursor-pointer p-2 m-4 w-fit rounded-md">
            <Link href="/">Go back</Link>
          </button>
          <div className="text-sky-800 text-3xl p-4 font-extralight">States of {item.country}</div>
          {item.states.map((state) => {
            return <div key={state} className="ml-6 hover:bg-orange-400 cursor-pointer p-3 m-2 rounded-lg w-fit">
              <a href={'https://google.com/search?q=' + state + " " + item.country} target="_blank" rel="noreferrer">{state}</a>
            </div>
          })}
        </div>;
      })}
    </div>
  )
}

export default Test