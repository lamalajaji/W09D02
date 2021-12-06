const initialState = {
  user: null,
  token: "",
};


const Todos = (state = initialState , action) => { 
    const {type , payload} = action; 

    switch (type){
        case "GET": 
        const {list} = payload;
        return {list};


        default: 
        return state;
    }
}; 

export default Todos ; 

export const getAllTodos = (data)=> {
    return {
        type : "GET",
        payload : data
    }
}