import type { NextApiResponse, NextApiRequest } from "next";
import { getDom } from "../../_lib/chromium";

const url = "https://br.betano.com/sport/futebol/ligas/10016r,10016o/";

const isDev = !process.env.AWS_REGION;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const waitSelector =
          ".events-list__grid__info__main__participants__name";

        const dom = await getDom(url, isDev, waitSelector);

        const clubArr: [string, string][] = [];
        const oddsArr: any = [];

        const allClubs = dom.querySelectorAll(
          ".events-list__grid__info__main__participants__name"
        );
        const allOdds = dom.querySelectorAll(".table__markets__market");

        for (let i = 0; i < allClubs.length; i = i + 2) {
          clubArr.push([allClubs[i].text.trim(), allClubs[i + 1].text.trim()]);
        }

        allOdds.forEach((item) => {
          oddsArr.push([
            Number(
              item
                .querySelectorAll(".selections__selection__odd")[0]
                .textContent.trim()
            ),
            Number(
              item
                .querySelectorAll(".selections__selection__odd")[1]
                .textContent.trim()
            ),
            Number(
              item
                .querySelectorAll(".selections__selection__odd")[2]
                .textContent.trim()
            ),
          ]);
        });

        while (oddsArr.length < 10) {
          oddsArr.push(null);
        }
        while (clubArr.length < 10) {
          clubArr.push(["", ""]);
        }

        res.setHeader("Cache-Control", "s-maxage=1800, stale-while-revalidate");

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
