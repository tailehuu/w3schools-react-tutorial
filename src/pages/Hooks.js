import HookRef from "../components/HookRef";
import TodosReducer from "../components/TodosReducer";
import TodoCallback from "../components/TodoCallback";

const Hooks = () => {
  return (
    <>
      <h1>Hooks Example</h1>

      <HookRef />

      <TodosReducer />

      <TodoCallback />
    </>
  )
}

export default Hooks
