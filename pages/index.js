import Head from 'next/head'
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import React from 'react';
import axios from 'axios';

export default function Home() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Email: ${email} Password: ${password}`);

    // Perform login logic here (e.g. send a request to a server)
    const getInitialProps = async function () {
      const response = await axios.get('');
      return { data: response.data };
    };
  };
  return (
    <div className={styles.container}>
      <Head>
      </Head>
      <main>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">ID:</label>
          <input type="text" id="id" value={email} onChange={(e) => setEmail(e.target.value)} />
          <br />
          <label htmlFor="password">Passworsd:</label>
          <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <br />
          <button type="submit">Login</button>
          <br />
          <div>
            <Link href="http://jdkserver.ipdisk.co.kr:80">
              My Nas at Home
            </Link>
            <br />
            <Link href="/posts/first_post">
              to youtube dwn link
            </Link>
          </div>
        </form>
      </main>
    </div>
  )
}