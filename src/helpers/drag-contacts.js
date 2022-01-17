import { contactsOperations } from 'redux/contacts';

export const dragContacts = (contacts, dispatch) => result => {
  const { destination, source } = result;
  if (!destination) {
    return;
  }
  if (
    destination.droppableId === source.droppableId &&
    destination.index === source.index
  ) {
    return;
  }
  const items = Array.from(contacts);
  const [reorderedItem] = items.splice(source.index, 1);
  items.splice(destination.index, 0, reorderedItem);
  dispatch(contactsOperations.orderContacts(items));
};
