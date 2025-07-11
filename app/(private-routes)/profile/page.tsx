import Image from "next/image";
import css from './ProfilePage.module.css';
import Link from "next/link";

export const metadata = {
  title: "Your Profile — NoteHub",
  description: "View and manage your profile information, settings, and notes.",
  openGraph: {
    title: "Your Profile — NoteHub",
    description: "Customize your profile and explore your saved notes.",
    siteName: "NoteHub",
    images: [
      {
        url: "/og_profile.png",
        width: 1200,
        height: 630,
        alt: "User Profile Page on NoteHub",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Your Profile — NoteHub",
    description: "Access your profile and settings in NoteHub.",
    images: ["/og_profile.png"],
  },
};

const Profile = () => {
  return (
    <main className={css.mainContent}>
      <div className={css.profileCard}>
        <div className={css.header}>
          <h1 className={css.formTitle}>Profile Page</h1>
          <Link href="#" className={css.editProfileButton}>
            Edit Profile
          </Link>
        </div>
        <div className={css.avatarWrapper}>
          <Image
            src="Avatar"
            alt="User Avatar"
            width={120}
            height={120}
            className={css.avatar}
          />
        </div>
        <div className={css.profileInfo}>
          <p>Username: your_username</p>
          <p>Email: your_email@example.com</p>
        </div>
      </div>
    </main>
  );
};

export default Profile;
