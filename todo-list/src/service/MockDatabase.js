import TodoItem from "../domain/TodoItem";

class MockDatabase {

    /**
     * This is the localStorage key for the current TodoItem ID.
     */
    static CURRENT_ID_KEY = Object.freeze('current-id');

    /**
     * This is the localStorage key for the TodoItem list.
     */
    static TODO_ITEM_LIST_KEY = Object.freeze('todo-item-list');

    /**
     * Returns the next available ID. Captures the current ID saved on the local storage 
     * (if it exists) and returns it +1. If it doesn't exist, returns '1' as the initial 
     * available ID.
     */
    getNextID = () => {
        const currentID = localStorage.getItem(MockDatabase.CURRENT_ID_KEY);
        return currentID ? parseInt(currentID) + 1 : 1;
    }

    /**
     * Saves the {TodoItem} in the database (localStorage). Sets the next available ID to it,
     * captures the current array of TodoItem (or an empty array if there is any) 
     * in the localStorage and pushes the new one to the end of it. Then puts the array back 
     * into the localStorage with the new item, and updates the value of the currentID 
     * in the localStorage as well.
     * @param {TodoItem} todo the TodoItem to be saved in the database.
     * @returns {TodoItem} the saved TodoItem
     */
    create = (todo) => {
        const nextID = database.getNextID();
        todo.id = nextID;

        /**
         * @type {TodoItem[]}
         */
        const todoList = JSON.parse(
            localStorage.getItem(MockDatabase.TODO_ITEM_LIST_KEY)
        ) || [];

        todoList.push(todo);

        localStorage.setItem(MockDatabase.TODO_ITEM_LIST_KEY, JSON.stringify(todoList));
        localStorage.setItem(MockDatabase.CURRENT_ID_KEY, nextID);

        return todo;
    }
}

const database = new MockDatabase();
export default database;