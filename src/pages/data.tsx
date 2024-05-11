import { useState } from 'react'

function dataPage({ data }) {
  const [loading, setLoading] = useState(false)

  return (
    <div>
      <h1>Data</h1>
      <ul>
        {data.map((data) => (
          <li key={data.id}>{data.name}</li>
        ))}
      </ul>
    </div>
  )
}

export async function getServerSideProps() {
  const res = await fetch(`${process.env.SERVER_API_URL}/api/data`)
  const data = await res.json()
  return { props: { data } }
}

export default dataPage