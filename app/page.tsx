export default async function Page() {
  console.log("BACKEND_URL:", process.env.BACKEND_URL)

  try {
    const response = await fetch(`${process.env.BACKEND_URL}/products`, {
      cache: "no-store",
    })

    console.log("STATUS:", response.status)

    const data = await response.json()
    console.log("DATA:", data)
  } catch (error) {
    console.error("FETCH ERROR:", error)
  }

  return (
    <div>
      <h1>Hola amore ! Te amoo</h1>
    </div>
  )
}
