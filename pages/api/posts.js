export default function handler(req, res) {
  const re = new Array(6).fill(0).map((item, index) => {
    return {
      title: '博客' + index,
      key: index
    };
  });
  res.status(200).json(re);
}
