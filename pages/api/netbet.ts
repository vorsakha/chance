//asb-text asb-pos-wide
import type { NextApiResponse, NextApiRequest } from "next";
import { getDom } from "../../_lib/chromium";

const url = "https://br.netbet.com/futebol/brasileir%C3%A3o-s%C3%A9rie-a/";

const isDev = !process.env.AWS_REGION;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const waitSelector = ".rj-ev-list__ev-card__team-name";

        const dom = await getDom(url, isDev, waitSelector);

        const clubArr: [string, string][] = [];
        const oddsArr: [number, number, number][] = [];

        const allClubs = dom.querySelectorAll(
          ".rj-ev-list__ev-card__team-name"
        );
        const allOdds = dom.querySelectorAll(
          ".rj-ev-list__ev-card__section--ThreeBox"
        );

        for (let i = 0; i < allClubs.length; i = i + 2) {
          clubArr.push([allClubs[i].text.trim(), allClubs[i + 1].text.trim()]);
        }

        allOdds.forEach((item) => {
          oddsArr.push([
            Number(item.querySelectorAll("span")[1].textContent.trim()),
            Number(item.querySelectorAll("span")[5].textContent.trim()),
            Number(item.querySelectorAll("span")[9].textContent.trim()),
          ]);
        });

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
