import type { RouterOutputs } from "~/utils/api";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import Image from "next/image";
import Link from "next/link";



type PostWithUser = RouterOutputs["posts"]["getAll"][number];

dayjs.extend(relativeTime);



export const PostView = (props: PostWithUser) => {
  const { post, author } = props;
  return (
    <div key={post.id} className="flex gap-3 border-b border-slate-400 p-4">
      <Image
        src={author.profileImageUrl}
        alt={`@${author.username} `}
        className="h -16 w-16 rounded-full"
        width={56}
        height={56}
      />
      <div className="flex flex-col">
        <div className="flex gap-1 text-slate-300">
          <Link href={`/${author.username}`}>
            <span>{`@${author.username}`}</span>
            <span>{` · ${dayjs(post.createdAt).fromNow()}`}</span>
          </Link>
        </div>
        <Link href={"/post/${post.id}"}>
          <span className="text-2xl">{post.content}</span>
        </Link>
      </div>
    </div>
  );
};