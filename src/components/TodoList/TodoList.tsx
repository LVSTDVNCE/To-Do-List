import React, { useState, useEffect } from 'react';
import TaskTodo from '../TaskTodo/TaskTodo';
import { Todo } from '../../types/types';
import './TodoList.css';
import { DragDropContext, Droppable, Draggable, DropResult } from 'react-beautiful-dnd';

interface TodoListProps {
  todos: Todo[];
  //toggleComplete: (id: number) => void;
  removeTodo: (id: number) => void;
}

const onDragEnd = (result: DropResult, columns: any, setColumns: any) => {
  if (!result.destination) return;
  const { source, destination } = result;

  if (source.droppableId !== destination.droppableId) {
    const sourceColumn = columns[source.droppableId];
    const destColumn = columns[destination.droppableId];
    const sourceItems = [...sourceColumn.items];
    const destItems = [...destColumn.items];
    const [removed] = sourceItems.splice(source.index, 1);
    destItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...sourceColumn,
        items: sourceItems,
      },
      [destination.droppableId]: {
        ...destColumn,
        items: destItems,
      },
    });
  } else {
    const column = columns[source.droppableId];
    const copiedItems = [...column.items];
    const [removed] = copiedItems.splice(source.index, 1);
    copiedItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...column,
        items: copiedItems,
      },
    });
  }
};

const TodoList: React.FC<TodoListProps> = ({ todos, removeTodo }) => {
  const [columns, setColumns] = useState({
    toDo: {
      name: "To-Do",
      img: "./img/todo.svg",
      items: todos,
    },
    done: {
      name: "Done",
      img: "./img/done.svg",
      items: [],
    },
  });

  useEffect(() => {
    setColumns((prevColumns) => ({
      ...prevColumns,
      toDo: {
        ...prevColumns.toDo,
        items: todos,
      },
    }));
  }, [todos]);

  return (
    <div className='TodoList'>
      <DragDropContext onDragEnd={(result) => onDragEnd(result, columns, setColumns)}>
        {Object.entries(columns).map(([columnId, column]) => {
          return (
            <div key={columnId}>
              <div>
                <Droppable droppableId={columnId} key={columnId}>
                  {(provided) => {
                    return (
                      <div
                        className='board'
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                      >
                        <div className="board__title">
                          <img src={column.img} alt="" className='board__img' />
                          {column.name}
                        </div>
                        {column.items.map((item: Todo, index: number) => {
                          return (
                            <Draggable
                              key={item.id}
                              draggableId={item.id.toString()}
                              index={index}
                            >
                              {(provided) => {
                                return (
                                  <div
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                  >
                                    <TaskTodo
                                      key={item.id}
                                      todo={item}
                                      //toggleComplete={toggleComplete}
                                      removeTodo={removeTodo}
                                    />
                                  </div>
                                );
                              }}
                            </Draggable>
                          );
                        })}
                        {provided.placeholder}
                      </div>
                    );
                  }}
                </Droppable>
              </div>
            </div>
          );
        })}
      </DragDropContext>
    </div>
  );
};

export default TodoList;