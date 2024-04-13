import Link from "next/link";

function RedirectIcon({
  className,
  href,
}: {
  className: string;
  href: string;
}) {
  return (
    <Link href={href} target="_blank">
      <div className={className}>
        <svg
          className="fill-current stroke-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <g>
            <path
              className="fill-current stroke-current"
              d="M492.703 0H353.126c-10.658 0-19.296 8.638-19.296 19.297 0 10.658 8.638 19.296 19.296 19.296h120.281v120.281c0 10.658 8.638 19.296 19.296 19.296S512 169.532 512 158.874V19.297C512 8.638 503.362 0 492.703 0z"
            ></path>
            <path
              className="fill-current stroke-current"
              d="M506.346 5.654c-7.538-7.539-19.747-7.539-27.285 0L203.764 280.95c-7.539 7.532-7.539 19.753 0 27.285a19.219 19.219 0 0 0 13.643 5.654c4.933 0 9.873-1.885 13.643-5.654L506.346 32.939c7.539-7.532 7.539-19.753 0-27.285z"
              strokeWidth="5"
            ></path>
            <path
              className="fill-current stroke-current"
              d="M427.096 239.92c-10.658 0-19.297 8.638-19.297 19.296v214.191H38.593V104.201h214.191c10.658 0 19.296-8.638 19.296-19.296s-8.638-19.297-19.296-19.297H19.297C8.638 65.608 0 74.246 0 84.905v407.799C0 503.362 8.638 512 19.297 512h407.799c10.664 0 19.296-8.638 19.296-19.297V259.216c0-10.658-8.638-19.296-19.296-19.296z"
            ></path>
          </g>
        </svg>
      </div>
    </Link>
  );
}
export default RedirectIcon;
