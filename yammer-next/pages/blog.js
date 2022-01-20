//front-end
import Head from 'next/head'
import { BlogHeader, BlogPost, BlogWidget, Categories } from '../components'
//back-end
import { getPosts } from '../services'

function Blog ({ posts }) {
  return (
    <>
      <div
        className='
      h-screen 
      pb-[120px]
      overflow-hidden 
      scrollbar-hide
      bg-gray-50'
      >
        <Head>
          <title>Blog-page</title>
        </Head>
        <BlogHeader />
        <div
          className='
        max-w-[1300px]
        overflow-y-scroll
        scrollbar-hide
        mx-auto
        bg-gray-100
        h-screen  
        grid 
        grid-cols-1 
        lg:grid-cols-12 
        gap-12'
        >
          <div className='featuredBlogs'>
            {posts.map(post => (
              <BlogPost post={post.node} key={post.title} />
            ))}
          </div>
          <div className='lg:col-span-4 col-span-1'>
            <div className='lg:sticky relative top-8 pb-[120px]'>
              <BlogWidget />
              <Categories />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Blog

export async function getStaticProps () {
  const posts = (await getPosts()) || []

  return {
    props: {
      posts
    }
  }
}
