const data = [  { id: 1, name: 'Name 1' },  { id: 2, name: 'Name 2' },  { id: 3, name: 'Name 3' },]

export default function handler(req, res) {
  res.status(200).json(data)
}