import Link from 'next/link';
import CustomLink from '../components/customLink';
export default function Home() {
  console.log(process.env.NEXT_PUBLIC_SERVER_HOST);
  return (
    <>
      <h1>index</h1>
      <ul>
        <li>
          <Link href="/book">
            <a>静态路由跳转book</a>
          </Link>
        </li>
        <li>
          <Link href="/book/one">
            <a>静态路由跳转book/one</a>
          </Link>
        </li>
        <li>
          <Link href="/book/[if]" as="/book/123">
            <a>动态路由跳转book/123</a>
          </Link>
        </li>
        <li>
          <Link href="/book/one" passHref>
            <CustomLink />
          </Link>
        </li>
        <li>
          <Link
            href={{
              pathname: '/book',
              query: {
                year: 2020
              }
            }}
          >
            <a>url跳转 /book querystring year = 2020</a>
          </Link>
        </li>
        <li>
          <Link
            href={{
              pathname: '/book',
              query: {
                year: 2020
              }
            }}
            replace
          >
            <a>replace页面</a>
          </Link>
        </li>
        <li>
          <Link passHref href="/book">
            <button>按钮</button>
          </Link>
        </li>
      </ul>
    </>
  );
}
