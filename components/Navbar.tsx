import Link from "next/link"

const Navbar = () => {
	return (
		<div className="bg-emerald-700 rounded shadow-md flex flex-row items-center justify-between m-2 p-6">
			<Link href='/'><img src="#" alt="logo" /></Link>
			<p>Next Study</p>
			<div className="flex flex-row gap-8">
				<Link href='/form' className="hover:underline">Form</Link>
				<Link href='/list' className="hover:underline">List</Link>
			</div>
		</div>
	)
}

export default Navbar
