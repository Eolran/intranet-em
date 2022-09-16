import { REPLACE } from "../store/reducer";

const makeSearch = (input, collaborator, select1, select2) => {
    let re = new RegExp(input.current + ".+$", "i");
    console.log(input.current, collaborator)
    let tempArray = []
    switch (select2) {
        case "all":
            if (select1 == "name") {
                tempArray = collaborator.filter(function (e) {
                    if (e.firstname.search(re) !=-1 || e.lastname.search(re) !=-1) {
                        return e
                    }
                })
            }
            if (select1 == "place") {
                tempArray = collaborator.filter(function (e) {
                    if (e.city.search(re) !=-1 || e.country.search(re) !=-1) {
                        return e
                    }
                })
            }
            
            break;

            // e.service.search(re) == "Client" || e.service.search(re) !=-1 
        case "Client":
            if (select1 == "name") {
                tempArray = collaborator.filter(function (e) {
                    if (e.service == "Client") {
                        if (e.firstname.search(re) !=-1 || e.lastname.search(re) !=-1 ) {
                            return e
                        }
                    }
                })
            }
            if (select1 == "place") {
                tempArray = collaborator.filter(function (e) {
                    if (e.service == "Client") {
                        if (e.city.search(re) !=-1 || e.country.search(re) !=-1) {
                            return e
                        }
                    }
                })
            }
            
            break;

        case "Marketing":
            if (select1 == "name") {
                tempArray = collaborator.filter(function (e) {
                    if (e.service == "Marketing") {
                        if (e.firstname.search(re) !=-1 || e.lastname.search(re) !=-1 ) {
                            return e
                        }
                    }
                })
            }
            if (select1 == "place") {
                tempArray = collaborator.filter(function (e) {
                    if (e.service == "Marketing") {
                        if (e.city.search(re) !=-1 || e.country.search(re) !=-1) {
                            return e
                        }
                    }
                })
            }
            
            break;

        case "Technique":
            if (select1 == "name") {
                tempArray = collaborator.filter(function (e) {
                    if (e.service == "Technique") {
                        if (e.firstname.search(re) !=-1 || e.lastname.search(re) !=-1 ) {
                            return e
                        }
                    }
                })
            }
            if (select1 == "place") {
                tempArray = collaborator.filter(function (e) {
                    if (e.service == "Technique") {
                        if (e.city.search(re) !=-1 || e.country.search(re) !=-1) {
                            return e
                        }
                    }
                })
            }
            
            break;
    
    }
    console.log(tempArray)
    return tempArray;
    
}

export function Search(input, collaborator, select1, select2, dispatch, setUsersList) {
    console.log(input);
    console.log(select1);
    console.log(select2);
   console.log(makeSearch(input, collaborator, select1, select2))

   let SearchedUsers = makeSearch(input, collaborator, select1, select2);
   dispatch(REPLACE({updateList: SearchedUsers}));
   setUsersList(SearchedUsers);
   
   localStorage.setItem("SearchUser", JSON.stringify(SearchedUsers));
}