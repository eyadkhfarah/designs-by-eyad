import { Skeleton } from '@/Components/ui/skeleton'
import React from 'react'

const array = new Array(10).fill(null)

export default function loading() {
  return (
    <>
      {array.map((_, index) => (
        <Skeleton key={index} />
      ))}
    </>
  )
}
