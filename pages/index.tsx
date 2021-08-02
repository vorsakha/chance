import axios from "axios";
import { GetStaticProps, InferGetStaticPropsType } from "next";
//: InferGetStaticPropsType<typeof getStaticProps>
import Head from "next/head";
import { useEffect, useState } from "react";
import Clubs from "../components/Clubs";
import Odds from "../components/Odds";

export async function getStaticProps(): Promise<any> {
  try {
    const netbetRes = await axios.get("http://localhost:3000/api/netbet");
    const ktoRes = await axios.get("http://localhost:3000/api/kto");
    const campobetRes = await axios.get("http://localhost:3000/api/campobet");
    const betanoRes = await axios.get("http://localhost:3000/api/betano");
    const betfairRes = await axios.get("http://localhost:3000/api/betfair");

    return {
      props: {
        data: [
          netbetRes.data,
          ktoRes.data,
          campobetRes.data,
          betanoRes.data,
          betfairRes.data,
        ],
      },
    };
  } catch (error) {
    console.error(error);
    console.log(error);
  }
}

//Types
interface OddsTypes {
  odds: [number, number, number][];
}

export default function Home({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [index, setIndex] = useState(0);

  console.log(data);

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>{<Clubs data={data[3].clubs} index={index} />}</h1>
      {data.map((odd: OddsTypes, key: any) => (
        <p key={key}>{<Odds data={odd.odds} index={index} />}</p>
      ))}
      <ul>
        {data[3].clubs.map((club: string[], key: number) => (
          <li key={key}>
            <button onClick={() => setIndex(key)}>
              {club[0]} x {club[1]}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
