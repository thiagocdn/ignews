import Head from 'next/head';
import Prismic from '@prismicio/client'
import { getPrismicClient } from '../../services/prismic';
import styles from './styles.module.scss'

const Posts = () => {
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>

      <main className={styles.container}>
        
      <div className={styles.posts}>

          <a href="">
            <time>12 de março</time>
            <strong>Titulo do post</strong>
            <p>Paragrafo do post muito bonito</p>
          </a>

          <a href="">
            <time>12 de março</time>
            <strong>Titulo do post</strong>
            <p>Paragrafo do post muito bonito</p>
          </a>

          <a href="">
            <time>12 de março</time>
            <strong>Titulo do post</strong>
            <p>Paragrafo do post muito bonito</p>
          </a>
          
        </div>
      </main>
    </>
  );
}

export default Posts;

export const getStaticProps = async () => {
  const prismic = getPrismicClient()

  const response = await prismic.query([
    Prismic.predicates.at('document.type', 'post')
  ], {
    fetch: ['post.title', 'post.content'],
    pageSize: 10,
  })

  console.log('response', response)

  return {
    props: {

    }
  }
}