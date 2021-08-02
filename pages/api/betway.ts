import type { NextApiResponse, NextApiRequest } from "next";
import { getDom } from "../../_lib/chromium";

// TIMEOUT, WEBSITE TOO SHITTY

const url = "https://betway.com/pt/sports/grp/soccer/brazil/brasileiro-serie-a";

const isDev = !process.env.AWS_REGION;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const waitSelector = ".oddsDisplay";

        const dom = await getDom(url, isDev, waitSelector);

        const clubArr: [string, string][] = [];
        const oddsArr: [number, number, number][] = [];

        const allClubs = dom.querySelectorAll(".teamNameFirstPart");
        const allOdds = dom.querySelectorAll(".oddsDisplay");

        for (let i = 0; i < allClubs.length; i = i + 2) {
          clubArr.push([allClubs[i].text.trim(), allClubs[i + 1].text.trim()]);
        }

        for (let i = 0; i < allOdds.length; i = i + 3) {
          oddsArr.push([
            Number(allOdds[i].text.trim()),
            Number(allOdds[i + 1].text.trim()),
            Number(allOdds[i + 2].text.trim()),
          ]);
        }

        res.status(200).json({ clubs: clubArr, odds: oddsArr });
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
