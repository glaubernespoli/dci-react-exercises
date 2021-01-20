import './List.css'

import ListItem from './ListItem/ListItem'

const List = () => {
    return (
      <ul className="list-group">
        <ListItem id="el1" content="I have to do something" />
      </ul>
    );
}

export default List;