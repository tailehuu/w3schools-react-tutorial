import useFetch from "../hooks/useFetch";

const CustomHook = () => {
  const [data] = useFetch("https://jsonplaceholder.typicode.com/todos")

  return (
    <>
      <h2>Custom Hook</h2>

      {data &&
        data.map((item) => {
          return <p key={item.id}>{item.title}</p>;
        })}
    </>
  )
}

export default CustomHook