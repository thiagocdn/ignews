import Head from 'next/head';
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