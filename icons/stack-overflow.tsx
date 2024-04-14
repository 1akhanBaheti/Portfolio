import Link from "next/link";

export function StackOverflowIcon({ className }: { className?: string }) {
  return (
    <Link href={`https://leetcode.com/1akhan__/`} target="_blank">
      <div className={className}>
        <svg
          aria-hidden="true"
          className="fill-current stroke-current"
          viewBox="0 0 32 37"
        >
          <path
            className="fill-current stroke-current"
            d="M26 33v-9h4v13H0V24h4v9h22Z"
          ></path>
          <path
            className="fill-current stroke-current"
            d="m21.5 0-2.7 2 9.9 13.3 2.7-2L21.5 0ZM26 18.4 13.3 7.8l2.1-2.5 12.7 10.6-2.1 2.5ZM9.1 15.2l15 7 1.4-3-15-7-1.4 3Zm14 10.79.68-2.95-16.1-3.35L7 23l16.1 2.99ZM23 30H7v-3h16v3Z"
          ></path>
        </svg>
      </div>
    </Link>
  );
}