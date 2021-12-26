export default function (req, res) {
  const {
    query: { id }
  } = req;
  res.setStatus = 200;
  const data = {
    course: id
  };
  res.send(JSON.stringify(data));
}
