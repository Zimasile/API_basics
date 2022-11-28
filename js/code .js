fetch('../data/data.json')
.then((response)=> {
    return response.json();
})
.then((data)=> {
    console.log(data);
})
.catch(()=> {
    console.log("Please try again later")
})

