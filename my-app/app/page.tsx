import Image from 'next/image'
import Link from 'next/link'
import Productcard from './components/Productcard'
export default function Home() {
  return (
    <main>
      <h1>hello</h1>
      <Link href='/users'>userspage</Link>
      {/* <div className="dropdown dropdown-hover">
        <div tabIndex={0} role="button" className="btn m-1">Hover</div>
        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
          <li><a>Item 1</a></li>
          <li><a>Item 2</a></li>
        </ul>
        <div>
        </div>
      </div> */}
      <Productcard />
    </main>
  )
}