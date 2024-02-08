import { title } from 'process';
import styles from './page.module.css';
import Link from 'next/link';

async function getNews() {
  const res = await fetch('https://45.146.167.130/api/news?news=4')
    .then((res) => res.json())
    .catch((err) => {throw new Error(err.message)});
      
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    
  }
  return res;
}

export default async function Home() {
  const news = await getNews();

  return (
    <main className={styles.main}>
      <h1>clean main page</h1>
      <div>
        <h2>news</h2>
        <ul>
          {news.map((item: any) => (
            <li key={item.id}>
              <Link href={'/news/' + item.id}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </div>
      <h1><Link href='/posts_server/'>Posts_server</Link></h1>
      <h1><Link href='/posts_mix/'>Posts_mix</Link></h1>
    </main>
  );
}
