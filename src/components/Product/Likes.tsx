"use client"
import React, { useEffect, useState } from 'react'

export function Likes({product}: any) {
  const [like, setLike] = useState(false)
  const [likeCount, setLikeCount] = useState(0)

  async function handleUpdateLikeCount(id: number) {
    const vote = !like ? likeCount + 1 : likeCount
    setLike(!like)
    await fetch(`https://api-strapi-9nk4.onrender.com/api/products/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        id,
        likeCount: vote,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
  }
  useEffect(() => {
    return setLikeCount(product?.likeCount as number)
  }, [product?.likeCount])
  return (
    <div>
      <button
        onClick={() => handleUpdateLikeCount(product.attributes.id)}
        className='bg-blue-500 text-white rounded-md p-2'
      >
        {like ? 'Liked' : 'Like'}
      </button>
    </div>
  )
}
