
// 全匹配api
export default function (req, res) {
  const {
    query: { slug }
  } = req;
  res.setStatus = 200;
  const data = {
    all: slug
  };
  res.send(JSON.stringify(data));
}
