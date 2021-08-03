import axios from "axios";
import { InferGetStaticPropsType } from "next";
import Head from "next/head";
import { useEffect } from "react";
import Clubs from "../components/Clubs";
import Container from "../components/common/container";
import Navbar from "../components/Nav";
import Odds from "../components/Odds";
import { useData } from "../context";

export async function getStaticProps(): Promise<any> {
  try {
    // const netbetRes = await axios.get("http://localhost:3000/api/netbet");
    const ktoRes = await axios.get("http://localhost:3000/api/kto");
    const campobetRes = await axios.get("http://localhost:3000/api/campobet");
    const betanoRes = await axios.get("http://localhost:3000/api/betano");
    // const betfairRes = await axios.get("http://localhost:3000/api/betfair");

    return {
      props: {
        data: [ktoRes.data, campobetRes.data, betanoRes.data],
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
  const { setData } = useData();

  useEffect(() => {
    setData(data);
  }, []);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <Container>
        <h1>{<Clubs data={data[2].clubs} />}</h1>
        {data.map((odd: OddsTypes, key: any) => (
          <div key={key}>{<Odds data={odd.odds} />}</div>
        ))}
      </Container>
    </>
  );
}
