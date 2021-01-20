import database from './MockDatabase'

class TodoService {

    /**
     * Responsible for handling the creation of a new TodoItem.
     * @param {TodoItem} todo 
     */
    create = (todo) => {
        //TODO create TodoItem validation
        database.create(todo);
    }

}

const todoService = new TodoService();
export default todoService;