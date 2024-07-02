function TodoList({content}) {
    return (
        <ul>
            {content.map(tasks => (
                <li key={tasks.id}> {tasks.text} </li>
            ))}
        </ul>
    );
}
 
export default TodoList;