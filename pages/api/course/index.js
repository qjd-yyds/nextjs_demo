export default function (req, res) {
  res.setStatus = 200;
  const data = {
    course: 123
  };
  res.send(JSON.stringify(data));
}
