import Head from "next/head";
import styles from "./404.module.scss";

export default function NotFound() {
  return (
    <div className={styles.contentContainer}>
      <Head>
        <title>404 | Page not found</title>
      </Head>
      <p>Page not found</p>
    </div>
  );
}
