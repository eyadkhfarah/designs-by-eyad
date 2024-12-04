"use client"

import { NotionProps } from '@/types/notionType'
import {
  FacebookShareButton, LinkedinShareButton, TwitterShareButton,
} from 'next-share'
import { RiFacebookCircleFill, RiLinkedinFill, RiTwitterXLine } from 'react-icons/ri'

export default function Share({ post }: NotionProps) {
  return (
    <div className='flex items-center gap-8'>
      <FacebookShareButton
        url={post.properties.Slug.rich_text[0].plain_text}
        quote={post.properties.Name.title[0].plain_text}
        hashtag={'#designsbyeyad'}
      >
        <RiFacebookCircleFill className="shareLink"/>
      </FacebookShareButton>
      <TwitterShareButton
        url={post.properties.Slug.rich_text[0].plain_text}
        title={post.properties.Name.title[0].plain_text}
        hashtags={['designsbyeyad']}
      >
        <RiTwitterXLine className="shareLink"/>
      </TwitterShareButton>
      <LinkedinShareButton
        url={post.properties.Slug.rich_text[0].plain_text}
        // children={post.properties.Name.title[0].plain_text}
      >
        <RiLinkedinFill className="shareLink"/>
      </LinkedinShareButton>
    </div>
  )
}
