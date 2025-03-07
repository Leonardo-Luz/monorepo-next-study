import { NextApiRequest } from "next"

export const GET = async (req: NextApiRequest) => {
	return new Response(JSON.stringify({ data: 'all posts' }), { status: 200, headers: { 'Content-Type': 'application/json' } });
}
