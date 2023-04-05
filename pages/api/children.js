import axios from "axios"; // import { getSession } from "next-auth/react"

export default async function handler(req, res) {
  // const session = await getSession({ req });

  if (req.method == "POST") {
    try {
      const data = req.body;
      console.log(data, "to send to api to get children data");
      const { token } = req.body;
      console.log(token, "token to send to api");
      var config = {
        method: "post",
        url: "http://3.109.75.65:4001/api/v1/member/getchildtree",
        headers: {
          Authorization: `Bearer ${token} `,
        },
        data,
      };
      await axios(config).then(function (response) {
        res.status(200).json({ data: response.data });
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({ Error: err });
    }
  }
}
