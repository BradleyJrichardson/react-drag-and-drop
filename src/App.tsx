import * as React from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { reorderColors } from "./reorder";
import { ColorMap } from "./types";
import { AuthorList } from "./AuthorList";

const App = () => {
  const [colorMap, setColors] = React.useState<ColorMap>({
    a: [],
    b: [],
    c: [],
    unranked: [
      "https://www.ssbwiki.com/images/thumb/b/b3/Olimar_SSBU.png/500px-Olimar_SSBU.png",
      "https://www.ssbwiki.com/images/thumb/b/b0/Olimar-Alt4_SSBU.png/500px-Olimar-Alt4_SSBU.png"
    ]
  });

  return (
    <DragDropContext
      onDragEnd={({ destination, source }) => {
        // // dropped outside the list
        if (!destination) {
          return;
        }

        setColors(reorderColors(colorMap, source, destination));
      }}
    >
      <div>
        {Object.entries(colorMap).map(([k, v]) => (
          <AuthorList
            internalScroll
            key={k}
            listId={k}
            listType="CARD"
            urls={v}
          />
        ))}
      </div>
    </DragDropContext>
  );
};

export default App;
