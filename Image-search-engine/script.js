const accesskey  = 'c7yI_RG4RnIZXsLHZAufv_AplL2tf8T5AuuiWap8jv8';

const searchForm = document.getElementById('search-form');
const searchBox = document.getElementById('search-box');
const searchResult = document.getElementById('search-result');
const showMoreBtn = document.getElementById('show-more-btn');


let keyword = "";
let page = 1;

async function searchImages(){
    keyword = searchBox.value;
    // const url = 'https://api.unsplash.com/search/photos?page=' + page + '&query=' + keyword + '&client_id=' + accesskey;
    // const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accesskey}`;//only 10 images then
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accesskey}&per_page=12`;//now 12 images is displayed

    // https://api.unsplash.com/search/photos?page=1&query=office&client_id=c7yI_RG4RnIZXsLHZAufv_AplL2tf8T5AuuiWap8jv8
    const response = await fetch(url);
    const data = await response.json();

    const results = data.results;
    console.log(data);

    // document.documentElement.style.setProperty('block');
    if(page === 1){
        searchResult.innerHTML = '';
    }
    results.map((result) =>{
        const image = document.createElement("img");
        image.src = result.urls.small;
        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank";

      imageLink.appendChild(image);  
      searchResult.appendChild(imageLink);
    });
    if(keyword == ''){
        showMoreBtn.style.display = "none";

    }
    else{
        showMoreBtn.style.display = "block";
    }
}

searchForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    page =1;
    searchImages();
});


showMoreBtn.addEventListener("click", ()=>{
    page++;
    searchImages();
});

