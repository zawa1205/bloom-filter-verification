import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <main className={`${styles.main} ${inter.className}`}>
      <h1>Pages Router and App Router</h1>
      <p>{`/samples/${id}`}</p>
    </main>
  );
}
