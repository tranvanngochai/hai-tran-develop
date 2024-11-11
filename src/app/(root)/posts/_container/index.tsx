import Link from "next/link"
import React from "react"
import { POSTS } from "../_constants"

const PostsContainer = () => {
  return (
    <main className="p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Welcome to My Blog</h1>
      <div className="space-y-4">
        {POSTS.map((post) => (
          <article key={post.id} className="border p-4 rounded-lg">
            <Link
              href={`/posts/${post.slug}`}
              className="text-blue-600 hover:underline"
            >
              <h2 className="text-xl font-semibold">{post.title}</h2>
            </Link>
          </article>
        ))}
      </div>
    </main>
  )
}

export default PostsContainer