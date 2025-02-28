export const GET = async (req: Request, context: { params: { id: string } }) => {
	// Next Error: params need to be awaited
	const { id } = await context.params

	return new Response(JSON.stringify({ data: id }), { status: 200, headers: { 'Content-Type': 'application/json' } });
}
