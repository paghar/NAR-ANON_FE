import Link from "next/link";

export default function ErrorPage() {
  return (
    <div>
      <div>
        <div>
          <h5>Something went wrong</h5>
        </div>
        <Link href="/">Return to Home page</Link>
      </div>
    </div>
  );
}
