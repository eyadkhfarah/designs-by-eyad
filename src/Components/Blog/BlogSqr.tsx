import { NotionProps } from '@/types/notionType';
import Image from 'next/image';
import Link from 'next/link'

const siteUrl = process.env.PUBLIC_DOMAIN_URL || "https://designs-by-eyad.vercel.app";

export default function BlogSqr({ post }: NotionProps) {
    return (
        <Link className='blog-card' href={`/blog/${post.properties.Slug.rich_text[0].plain_text}`} rel="noreferrer">
            <Image className='rounded-2xl' alt={post.properties.Name.title[0].plain_text} src={`${post.properties.Thumbnail.files[0].name}`} width={1200} height={900} />
            <div className="grid gap-2">
                <h2 className='text-2xl'>{post.properties.Name.title[0].plain_text}</h2>
                <p className='text-slate-500 line-clamp-3'>{post.properties.Subtitle.rich_text[0].plain_text}</p>
            </div>
        </Link>
    )
}
