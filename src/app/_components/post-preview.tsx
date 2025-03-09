import { type Author } from "@/interfaces/author";
import Link from "next/link";
import Avatar from "./avatar";
import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
};

export function PostPreview({ title, coverImage, date, excerpt, author, slug }: Readonly<Props>) {
  return (
    <div className="block transition-transform duration-200 rounded-lg shadow-md hover:shadow-lg active:scale-95 bg-white dark:bg-gray-900 p-4">
      <div className="mb-5">
        <CoverImage slug={slug} title={title} src={coverImage} />
      </div>
      <Link href={`/posts/${slug}`} className="block">
        <h3 className="text-2xl mb-3 leading-snug font-semibold text-gray-900 dark:text-white">
          {title}
        </h3>
        <div className="text-md text-gray-600 dark:text-gray-400 mb-4">
          <DateFormatter dateString={date} />
        </div>
        <p className="text-md leading-relaxed text-gray-700 dark:text-gray-300 mb-4">
          {excerpt}
        </p>
        <div className="flex items-center">
          <Avatar name={author.name} picture={author.picture} />
        </div>
      </Link>
    </div>
  );
}