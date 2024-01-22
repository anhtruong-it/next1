import Image from "next/image";
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Welcome to My Image Upload App</h1>
      <Link href="/upload" legacyBehavior>
        <a>Go to Image Upload</a>
      </Link>
    </main>
  );
}
