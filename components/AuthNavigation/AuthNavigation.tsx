import css from "./AuthNavigation.module.css";
import Link from "next/link";

const AuthNavigation = () => {
  return [
    <li className={css.navigationItem} key="profile">
      <Link href="/profile" prefetch={false} className={css.navigationLink}>
        Profile
      </Link>
    </li>,

    <li className={css.navigationItem} key="logout">
      <p className={css.userEmail}>User email</p>
      <button className={css.logoutButton}>Logout</button>
    </li>,

    <li className={css.navigationItem} key="login">
      <Link href="/sign-in" prefetch={false} className={css.navigationLink}>
        Login
      </Link>
    </li>,

    <li className={css.navigationItem} key="singin">
      <Link href="/sign-up" prefetch={false} className={css.navigationLink}>
        Sign up
      </Link>
    </li>
  ];
};

export default AuthNavigation;
