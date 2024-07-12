import { connectFirestoreEmulator } from "firebase/firestore";

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
require("dotenv").config();
export default function Payment(req, res) {
  console.log("hello world");
  const toSold = req.body.amount;
  const id = Math.floor(Math.random() * 10000);

  fetch("http://ykc0k0s.35.153.180.176.sslip.io/collect", {
    // Adding method type
    method: "POST",

    // Adding body or contents to send
    body: JSON.stringify({
      amount: toSold,
      orderId: id,
      id: id,
      status: "pending",
    }),

    // Adding headers to the request
    headers: {
      "Content-Type": "application/json",
      Authorization: `${process.env.LIDEFLOW_API}`,
    },
  })
    // Converting to JSON
    .then((response) => response.json())

    // Displaying results to console
    .then((json) => res.status(200).json(json))
    .catch((err) => res.status(500).json({ error: err.message }));
}
