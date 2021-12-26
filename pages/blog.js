export default function Blog({ posts }) {
  return (
    <main>
      <h1>博客列表</h1>
      <div>getStaticProps 生成的</div>
      {posts.map((item) => {
        // eslint-disable-next-line react/jsx-key
        return <div>{item.title}</div>;
      })}
    </main>
  );
}
export async function getStaticProps() {
  const res = fetch('http://localhost:3000/docs/api/posts');
  const posts = await (await res).json();
  console.log(posts);
  return {
    props: {
      posts
    },
    revalidate:3 // 3s 内
  };
}
