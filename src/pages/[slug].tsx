import { type NextPage } from "next";
import Head from "next/head";
import { api } from "~/utils/api";

const ProfilePage: NextPage = () => {
  const { data, isLoading } = api.profile.getUserByUsername.useQuery({
    username: "luklambrechts",
  });

  if (isLoading) return <div>Loading...</div>;
  if (!data) return <div>404</div>;

  console.log(data);

  return (
    <>
      <Head>
        <title>Profile View</title>
      </Head>

      <main className="flex h-screen justify-center">
        <div className="h-full w-full border-x md:max-w-2xl">
          {data.username}
        </div>
      </main>
    </>
  );
};

import { createServerSideHelpers } from "@trpc/react-query/server";
import { appRouter } from "~/server/api/root";
import { prisma } from "~/server/db";
import superjson from "superjson";

export const getStaticProps = async (context: { params: { slug: any; }; }) => {
  const ssg = createServerSideHelpers({
    router: appRouter,
    ctx: { prisma, userId: null },
    transformer: superjson, // optional - adds superjson serialization
  });

  const slug = context.params?.slug;

  if (typeof slug !== "string") throw new Error("no slug");
  ssg.profile.getUserByUsername.prefetch({ username: slug });
  return {
    props: {
      trpcState: ssg.dehydrate(),
    },
  };
};

export default ProfilePage;
