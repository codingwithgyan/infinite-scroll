window.addEventListener("load",()=>{
    loadData();
})
window.addEventListener("scroll",()=>{
    if(window.scrollY+window.innerHeight>=document.documentElement.scrollHeight)
    {
        loadData();
    }
});
let count=1;
function loadData(limit=25)
{
    let container = document.getElementById("container");
    for(let i=count;i<(count+limit)&&i<301;i++)
    {
        let div = document.createElement("div");
        div.setAttribute("class","inner_div");
        div.innerHTML="Masai Student "+i;
        container.append(div);
       
    }
    count=count+limit;
}