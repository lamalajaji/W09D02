const initialState = {
  role: "",
  token: "",
};

const Users = (state = initialState , action) => {
    const {type , payload} = action ;

    switch (type) {
        case "LOGIN":
            const { role , token} = payload;
            localStorage.setItem("token", token);
            localStorage.setItem("role", role);
            return { role , token};

            case "LOGOUT" : 
            localStorage.clear();
            return {role : "" , token: ""};
            default: 
            return state
    }
}

export default Users;


export const signIn = (data) => {
  return {
    type: "LOGIN",
    payload: data,
  };
};

export const signOut = (data) => {
  return {
    type: "LOGOUT",
    payload: data,
  };
};