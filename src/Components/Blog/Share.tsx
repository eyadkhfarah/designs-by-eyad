import { NotionProps } from '@/types/notionType'
import {
  FacebookShareButton,
} from 'next-share'
import { RiFacebookCircleFill } from 'react-icons/ri'

export default function Share({ post }: NotionProps) {
  return (
    <div>
      <FacebookShareButton
        url={post.properties.Slug.rich_text[0].plain_text}
        quote={post.properties.Name.title[0].plain_text}
        hashtag={'#designsbyeyad'}
      >
        <RiFacebookCircleFill className="shareLink"/>
      </FacebookShareButton>
    </div>
  )
}
