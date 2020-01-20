import React from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";

interface Props {
  urls: string[];
  listId: string;
  listType?: string;
  internalScroll?: boolean;
  isCombineEnabled?: boolean;
}

export const AuthorList: React.FC<Props> = ({ listId, listType, urls }) => {
  return (
    <Droppable
      droppableId={listId}
      type={listType}
      direction="horizontal"
      isCombineEnabled={false}
    >
      {dropProvided => (
        <div {...dropProvided.droppableProps}>
          <div
            style={{
              display: "flex",
              backgroundColor: "#666",
              margin: 20,
              minHeight: 60
            }}
            ref={dropProvided.innerRef}
          >
            {urls.map((url, index) => (
              <Draggable key={url} draggableId={url} index={index}>
                {dragProvided => (
                  <div
                    {...dragProvided.dragHandleProps}
                    {...dragProvided.draggableProps}
                    ref={dragProvided.innerRef}
                  >
                    <img src={url} style={{ height: 50 }} />
                  </div>
                )}
              </Draggable>
            ))}
            {dropProvided.placeholder}
          </div>
        </div>
      )}
    </Droppable>
  );
};
