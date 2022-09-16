
const makeSearch = (input, collaborator) => {
    let re = new RegExp(input.current + ".+$", "i");
    console.log(input.current, collaborator)
    let tempArray = []
    tempArray = collaborator.filter(function (e) {
        if (e.firstname.search(re) !=-1 || e.lastname.search(re) !=-1) {
            return e
        }
    })
    console.log(tempArray)
    return tempArray;
    
}

export function Search(input, collaborator, select1, select2) {
    console.log(input);
    console.log(select1);
    console.log(select2);
   console.log(makeSearch(input, collaborator));
}