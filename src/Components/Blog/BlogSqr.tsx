import { NotionProps } from '@/types/notionType';
import Image from 'next/image';
import Link from 'next/link'
import { TbCalendarTime } from 'react-icons/tb';

const siteUrl = process.env.PUBLIC_DOMAIN_URL || "https://designs-by-eyad.vercel.app";

export default function BlogSqr({ post }: NotionProps) {
    return (
        <Link className='blog-card' href={`/blog/${post.properties.Slug.rich_text[0].plain_text}`} rel="noreferrer">
            <div className="relative">
                <div className="absolute left-5 top-5 bg-primary text-dark font-bold p-1 text-xs rounded-lg">{post.properties.Category.select.name}</div>
                <Image className='rounded-2xl' alt={post.properties.Name.title[0].plain_text} src={`${post.properties.Thumbnail.files[0].name}`} width={1200} height={900} />
            </div>
            <div className="grid gap-2">
                <h2 className='text-2xl line-clamp-2'>{post.properties.Name.title[0].plain_text}</h2>
                <p className='text-neutral-500 line-clamp-3'>{post.properties.Subtitle.rich_text[0].plain_text}</p>
            </div>
            <p className='flex gap-2 items-center'><span className='text-primary'><TbCalendarTime size={24} /></span>{post.properties.Publication.date.start}</p>
        </Link>
    )
}
