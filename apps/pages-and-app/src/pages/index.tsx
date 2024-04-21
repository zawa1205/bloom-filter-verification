import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const errorArray = [34, 99];
  return (
    <main className={`${styles.main} ${inter.className}`}>
      <h1>Pages Router and App Router</h1>
      <ul>
        {[...Array(100)].map((_, i) => (
          <li>
            <Link key={i} href={`/samples/${i}`}>
              {`/samples/${i}${errorArray.indexOf(i) !== -1 ? " (404)" : ""}`}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
