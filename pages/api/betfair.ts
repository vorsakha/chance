import type { NextApiResponse, NextApiRequest } from "next";
import { getDom } from "../../_lib/chromium";

const url = "https://www.betfair.com/sport/football/brasil-s%C3%A9rie-a/13";

const isDev = !process.env.AWS_REGION;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const dom = await getDom(url, isDev);

        const clubArr: [string, string][] = [];
        const oddsArr: [number, number, number][] = [];

        const allClubs = dom.querySelectorAll(".team-name");
        const allOdds = dom.querySelectorAll(".market-3-runners");

        for (let i = 0; i < allClubs.length; i = i + 2) {
          clubArr.push([allClubs[i].text.trim(), allClubs[i + 1].text.trim()]);
        }

        allOdds.forEach((item) => {
          oddsArr.push([
            Number(item.querySelectorAll("span")[1].textContent.trim()),
            Number(item.querySelectorAll("span")[2].textContent.trim()),
            Number(item.querySelectorAll("span")[3].textContent.trim()),
          ]);
        });

        res.status(200).json({ clubs: clubArr, Odds: oddsArr });
      } catch (error) {
        console.log(error);
        res.status(400).json({ error: "Server Error." });
      }
      break;

    default:
      res.status(400).json({ error: "Wrong Method." });
      break;
  }
}
