const form=document.querySelector("#searchform")
form.addEventListener("submit",async function(e){
    e.preventDefault();
    console.log("submitted");
    const searchshow=form.elements.query.value;
    console.log(searchshow);
    const config={params:{q:searchshow}}
    const res = await axios.get(`http://api.tvmaze.com/search/shows?q=${searchshow}`);
    console.log(res.data)
    //console.log(res.data[0].show.image.medium);
    //const image=document.createElement("img");
    //image.src=res.data[0].show.image.medium;
    //document.body.append(image);
    form.elements.query.value='';
    makeimgs(res.data);

})
const makeimgs=(shows)=>{
    for(let result of shows){
        console.log(result)
        if(result.show.image){
            const image=document.createElement("img");
            image.src=result.show.image.medium;
            document.body.append(image);
        }
    }
}
