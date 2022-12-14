import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pizza Restaurant in Lagos</title>
        <meta
          name="description"
          content="The most amazing Pizza Restaurant in Lagos"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      Homepage
    </div>
  );
}
