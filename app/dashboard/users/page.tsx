import Link from "next/link"

const Users = () => {
  return (
    <div>
      <h1>Users</h1>

      <ul className="mt-10">
        <li className="mb-2"><Link href="/dashboard/users/1"> John Doe</Link></li>
        <li className="mb-2"><Link href="/dashboard/users/2"> Jane Doe</Link></li>
        <li className="mb-2"><Link href="/dashboard/users/3"> John Smith</Link></li>
      </ul>

    </div>
  )
}

export default Users