import Link from "next/link";
import Image from "next/image";
import { useContext } from "react";
import AuthContext from "../store/authContext";
export default function Navbar() {
  const { user, login, logout, authReady } = useContext(AuthContext);
  console.log(user);

  return (
    <div className="container">
      <nav>
        <Image src="/rupee.png" width={50} height={48} />
        <h1>Gaming Vibes</h1>
        {authReady && (
          <ul>
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/guides">
                <a>Guides</a>
              </Link>
            </li>
            {user ? (
              <>
                <li style={{ textTransform: "capitalize" }}>
                  User : {user.user_metadata.full_name}
                </li>
                <li onClick={logout} className="btn">
                  Logout
                </li>
              </>
            ) : (
              <li onClick={login} className="btn">
                Login/Signup
              </li>
            )}
          </ul>
        )}
      </nav>
      <div className="banner">
        <Image src="/banner.png" width={966} height={276} />
      </div>
    </div>
  );
}
