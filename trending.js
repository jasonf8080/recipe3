//FUNCTIONS
export const setTrending = (data) => { 
    let trending = [];
    for(let i = 0; i < data.length; i++){
       if(data[i].trending){
          trending.push(data[i])
       }
    }

    return(trending);
}


export const paginate = (array) => {

    const itemsPerPage = 6;
    const numberOfPages = Math.ceil(array.length / itemsPerPage);
    
    const paginateArray = Array.from({length: numberOfPages}, (_, index) => {
        const start = index * itemsPerPage;
        return array.slice(start, start + itemsPerPage);
    })
    
    return paginateArray;
}



  