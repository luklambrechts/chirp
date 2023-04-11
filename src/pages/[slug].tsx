import { type NextPage } from "next";
import Head from "next/head";

const ProfilePage: NextPage = () => {

  return (
    <>
      <Head>
        <title>Profile View</title>
      </Head>

      <main className="flex h-screen justify-center">
        <div className="h-full w-full border-x md:max-w-2xl">
          Profile View
        </div>
      </main>
    </>
  );
};

export default ProfilePage;
