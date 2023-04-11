import { type NextPage } from "next";
import Head from "next/head";
import { api } from "~/utils/api";

const ProfilePage: NextPage = () => {
  const { data, isLoading } = api.profile.getUserByUsername.useQuery({
    username: "luklambrechts",
  });

  if (isLoading) return <div>Loading...</div>;
  if (!data) return <div>404</div>

  console.log(data);

  return (
    <>
      <Head>
        <title>Profile View</title>
      </Head>

      <main className="flex h-screen justify-center">
        <div className="h-full w-full border-x md:max-w-2xl">{data.username}</div>
      </main>
    </>
  );
};

export default ProfilePage;
