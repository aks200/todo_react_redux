const initialState = {
  todo: {}
};
export const todo = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_DO":
      console.log("IN redux add todo");
      console.log(action.text);
      const id = action.id;
      return {
        ...state,
        todo: {
          ...state.todo,
          [id]: {
            id: id,
            text: action.text,
            completed: false
          }
        }
      };

    case "ON_DELETE":
      //let r;
      console.log("IN redux delete");
      console.log(state);
      //const newList = { ...state.todo };

      //newList.delete(action.delid.state);

      //let newList=Object.keys(state.todo).filter(key=>state.todo[key]!==action.delid);
    // let newList=state.todo.filter(todo=>
    //todo.id!==action.delid)
      const todos = {...state.todo}
      delete todos[action.delid]
     // console.log(newList);
      return {todo:todos};

    default:
      return state;
  }
};