import { Suspense } from "react";

export default function Layout({ children }) {
  return (
    <div>
      <Suspense fallback={<p>Loading....</p>}>{children}</Suspense>
    </div>
  );
}
