import Link from "next/link"

const Navbar = () => {
	return (
		<div className="bg-emerald-700 rounded shadow-md flex flex-row items-center justify-between m-2 p-6">
			<Link href='/'><img src="#" alt="logo" /></Link>
			<p>Next Study</p>
			<div className="flex flex-row gap-8 items-center">
				<Link href='/signin' className="p-1.5 bg-lime-600 rounded-lg hover:underline">Sign in</Link>
				<Link href='/login' className="hover:underline">Login</Link>
			</div>
		</div>
	)
}

export default Navbar
