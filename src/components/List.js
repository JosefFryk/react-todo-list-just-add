import Todo from './Todo'
// ({ todos }) is like passing props,  
const List = ({ todos }) => {
    return (
        <div>
          {/* mapping through todos to create 1 component for each one */}
          {todos.map((todo) => 
            <Todo key={todo.id} todo={todo} />
          )}  
        </div>
    )
}

export default List

