import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold text-blue-600">Hello Next.js 👋</h1>
      <Link
        href="/signIN/signup"
        className="mt-6 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700"
      >
        Go to Onboarding
      </Link>
    </main>
  );
}
