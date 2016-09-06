import React from 'react';
import ReactDOM from 'react-dom';
import KanbanBoard from './KanbanBoard';
import Search from './Search';
import FocusText from './FocusText'
import KanbanBoardContainer from './KanbanBoardContainer';


//Cardlist works with KanbanBoard Not with Container!
// let cardsList = [
//  {
//  id: 1,
//  title: "Read the Book",
//  description: "I should read the  **whole**  book",
//  color:"#BD8D31",
//  status: "in-progress",
//  tasks: []
//  },
//  {
//  id: 2,
//  title: "Write some code",
//  description: "Code along with the samples in the book. The complete source can be found at [github](https://github.com/pro-react)",
//  color:"#3A7E28",
//  status: "todo",
//     tasks: [
//         {
//         id: 1,
//         name: "ContactList Example",
//         done: true
//         },
//         {
//         id: 2,
//         name: "Kanban Example",
//         done: false
//         },
//         {
//         id: 3,
//         name: "My own experiments",
//         done: false
//         }
//     ]
//  },
//   {
//  id: 1,
//  title: "This is very very long title. As you can see the complete title can be found at antoher part of the title maybe or maybe not for that time. Sorry for this explanation there are no evidence about what we did and make.",
//  description: "I created components in react",
//  status: "done",
//  tasks: []
//  },
// ];

const app = document.getElementById('app');

//ReactDOM.render(<KanbanBoard cards={cardsList}/>  , app);
//ReactDOM.render(<Search cards={cardsList}/>  , app);
//ReactDOM.render(<FocusText/>  , app);
ReactDOM.render(<KanbanBoardContainer />  , app);