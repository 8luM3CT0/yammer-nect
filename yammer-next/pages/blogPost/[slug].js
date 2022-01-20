//front-end
import Head from 'next/head'
import { ArticleHeader } from '../../components'
import {
  PostDetail,
  BlogWidget,
  Categories,
  Author,
  Comments,
  CommentsForm
} from '../../components'
//back-end
import { getPosts, getPostDetails } from '../../services'

function BlogPost ({ post }) {
  return (
    <div
      className='
    h-screen 
    overflow-y-scroll 
    scrollbar-hide 
    bg-gray-50  
    pb-[120px]'
    >
      <Head>
        <title>Article page</title>
      </Head>
      <ArticleHeader />
      <div
        className='
        max-w-[1300px]
        overflow-y-scroll
        scrollbar-hide
        mx-auto
        bg-gray-100
        h-full
        grid 
        grid-cols-1 
        lg:grid-cols-12 
        gap-12
      '
      >
        <div className='col-span-1 lg:col-span-8'>
          <PostDetail post={post} />
          <Author author={post.author} />
          <CommentsForm slug={post.slug} />
          <Comments slug={post.slug} />
        </div>
        <div className='col-span-1 lg:col-span-4'>
          <div className='relative lg:sticky top-8 pb-[120px]'>
            <BlogWidget
              slug={post.slug}
              categories={post.categories.map(category => category.slug)}
            />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogPost

export async function getServerSideProps ({ params }) {
  const data = await getPostDetails(params.slug)

  return {
    props: {
      post: data
    }
  }
}
