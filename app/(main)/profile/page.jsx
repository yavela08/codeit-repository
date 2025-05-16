import Image from "next/image";
import styles from "./page.module.css";
import SignOut from "@/components/SingOut/SingOut";

const Profile = async () => {
  let profile;
  try {
    const data = await fetch("https://dummyjson.com/users/1");
    profile = await data.json();

    if (profile.message) {
      throw Error(profile.message);
    }
  } catch (error) {
    throw Error(error);
  }

  return (
    <div className={styles.container}>
      <Image
        src={profile.image}
        className={styles.image}
        alt="Profile Image"
        width={100}
        height={100}
      />
      <section className={styles.section}>
        <div className={styles.infoWrapper}>
          <p>FirstName: </p>
          <p>{profile.firstName}</p>
        </div>
        <div className={styles.infoWrapper}>
          <p>MiddleName: </p>
          <p>{profile.maidenName}</p>
        </div>
        <div className={styles.infoWrapper}>
          <p>LastName: </p>
          <p>{profile.lastName}</p>
        <div className={styles.infoWrapper}>
         <p>Phone Number </p>
         <p>{profile.infoWrapper}</p>
        </div>
        <div>
          <p>Gmail</p>
          <p>{profile.infoWrapper}</p>
        </div>
        <div>
          <p> Birth Date</p>
          <p>{profile.infoWrapper}</p>
        </div>
          <p> Home Adress</p>
          <p>{profile.infoWrapper}</p>
        </div>
        <div>
          <p> University</p>
          <p>{profile.infoWrapper}</p>
          <div>
            <p> Company</p>
            <p>{profile.infoWrapper}</p>
          </div>
          <div>
            <p> Company Adress</p>
            <p>{profile.infoWrapper}</p>
          </div>
        </div>
      </section>
      <SignOut />
    </div>
  );
};

export default Profile;
