// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios';
export default async function handler(req, res) {
    const response = await axios.get(req.body.test);
    res.status(200).json(response.data)
  }
  