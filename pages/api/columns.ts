// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { Columns } from '../../data/columns';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
	const data = Columns;
	res.status(200).json({ data: data });
}
