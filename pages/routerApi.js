import Router from 'next/router';
export default function Home() {
  return (
    <>
      <h1>Router</h1>
      <ul>
        <li
          onClick={() => {
            // Router.push('/book');
            // Router.push('/book/[id]', '/book/456');
            Router.push({
              pathname: '/book',
              query: {
                year: 2020
              }
            });
          }}
        >
          跳转
        </li>
      </ul>
    </>
  );
}
