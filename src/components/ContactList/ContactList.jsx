import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import PropTypes from 'prop-types';
import ContactItem from './ContactItem';
import Stats from 'components/Stats';
import Loader from 'components/Loader';
import { contactsSelectors, contactsOperations } from 'redux/contacts';
import { dragContacts } from 'helpers/drag-contacts';
import s from './ContactList.module.scss';

export default function ContactList() {
  const contacts = useSelector(contactsSelectors.getContacts);
  const filteredContacts = useSelector(contactsSelectors.showFiltered);
  const isLoading = useSelector(contactsSelectors.getLoading);
  const filter = useSelector(contactsSelectors.getFilter);
  const dispatch = useDispatch();
  const onDeleteContact = id => dispatch(contactsOperations.deleteContact(id));

  return (
    <>
      {isLoading && <Loader />}
      {filteredContacts.length > 0 && (
        <DragDropContext onDragEnd={dragContacts(contacts, dispatch)}>
          <Stats />
          <Droppable droppableId="droppable">
            {provided => (
              <ul
                ref={provided.innerRef}
                {...provided.droppableProps}
                id="contactsList"
              >
                {filteredContacts.map(({ id, name, number }, index) => (
                  <Draggable
                    draggableId={id.toString()}
                    index={index}
                    key={id}
                    isDragDisabled={filter !== ''}
                  >
                    {(provided, snapshot) => {
                      const style = {
                        backgroundColor: snapshot.isDragging
                          ? '#ff524b'
                          : 'unset',
                        ...provided.draggableProps.style,
                      };
                      return (
                        <li
                          className={s.item}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          ref={provided.innerRef}
                          style={style}
                        >
                          <ContactItem
                            index={index}
                            id={id}
                            name={name}
                            number={number}
                            onDeleteContact={() => onDeleteContact(id)}
                          />
                        </li>
                      );
                    }}
                  </Draggable>
                ))}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </DragDropContext>
      )}
    </>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
  onDeleteContact: PropTypes.func,
};
