"use client"

import { NotionProps } from '@/types/notionType'
import {
  FacebookShareButton, LinkedinShareButton, TwitterShareButton,
} from 'next-share'
import { RiFacebookCircleFill, RiLinkedinFill, RiTwitterXLine } from 'react-icons/ri'
import { motion } from 'framer-motion'

export default function Share({ post }: NotionProps) {
  const siteUrl = process.env.PUBLIC_DOMAIN_URL || "https://designs-by-eyad.vercel.app";
  const postUrl = `${siteUrl}/blog/${post.properties.Slug.rich_text[0].plain_text}`;
  const postTitle = post.properties.Name.title[0].plain_text;

  return (
    <div className='flex items-center gap-4 py-6'>
      <span className='text-[10px] font-black uppercase tracking-[0.2em] text-neutral-500 mr-4'>
        Share Orbit
      </span>
      
      <div className='flex items-center gap-4'>
        <FacebookShareButton url={postUrl} quote={postTitle} hashtag={'#designsbyeyad'}>
          <motion.div whileHover={{ scale: 1.1, color: '#e5fe00' }} className="text-2xl text-white/50 cursor-pointer transition-colors">
            <RiFacebookCircleFill />
          </motion.div>
        </FacebookShareButton>

        <TwitterShareButton url={postUrl} title={postTitle} hashtags={['designsbyeyad']}>
          <motion.div whileHover={{ scale: 1.1, color: '#e5fe00' }} className="text-2xl text-white/50 cursor-pointer transition-colors">
            <RiTwitterXLine />
          </motion.div>
        </TwitterShareButton>

        <LinkedinShareButton url={postUrl}>
          <motion.div whileHover={{ scale: 1.1, color: '#e5fe00' }} className="text-2xl text-white/50 cursor-pointer transition-colors">
            <RiLinkedinFill />
          </motion.div>
        </LinkedinShareButton>
      </div>
    </div>
  )
}