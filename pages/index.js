import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home () {
  const links = [
    {
      url: 'nextjs.org/docs',
      title: 'Documentation',
      text: 'Find in-depth information about Next.js features and API.'
    }, {

      url: 'nextjs.org/learn',
      title: 'Learn',
      text: 'Learn about Next.js in an interactive course with quizzes!'
    }, {
      url: 'https://github.com/vercel/next.js/tree/master/examples',
      title: 'Examples',
      text: 'Discover and deploy boilerplate example Next.js projects.'
    }, {

      url: 'vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app',
      title: 'Deploy',
      text: 'Instantly deploy your Next.js site to a public URL with Vercel.'
    }]
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href='https://nextjs.org'>Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          {links.map(({ url, title, text },i) => (
            <a href={'https://' + url} key={`${title}-${i}`} className={styles.card}>
              <h3>{title} &rarr;</h3>
              <p>{text}</p>
            </a>

          ))}

        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
        >
          Powered by{' '}
          <img src='/vercel.svg' alt='Vercel Logo' className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
