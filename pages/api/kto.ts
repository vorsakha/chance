// .querySelectorAll("._asb_events-table-row")

import type { NextApiResponse, NextApiRequest } from "next";
import { getDom } from "../../_lib/chromium";

const url = "https://www.kto.com/pt/sports/competition/0/0/11318/";

const isDev = !process.env.AWS_REGION;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const waitSelector = "._asb_events-table-row";

        const dom = await getDom(url, isDev, waitSelector);

        const clubArr: [string, string][] = [];
        const oddsArr: any = [];

        const allData = dom.querySelectorAll("._asb_events-table-row");

        for (let i = 0; i < allData.length; i++) {
          clubArr.push([
            allData[i]
              .querySelectorAll(".asb-pos-wide.asb-text")[0]
              .text.trim(),
            allData[i]
              .querySelectorAll(".asb-pos-wide.asb-text")[1]
              .text.trim(),
          ]);

          oddsArr.push([
            Number(allData[i].querySelectorAll("span")[2].text.trim()),
            Number(allData[i].querySelectorAll("span")[3].text.trim()),
            Number(allData[i].querySelectorAll("span")[4].text.trim()),
          ]);
        }

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
