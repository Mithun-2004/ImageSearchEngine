const API_KEY = key();

let imageGallery = document.querySelector('.image-gallery');
let searchForm = document.querySelector('#search-form');
let searchInput = document.querySelector('#search-input');
let showMoreBtn = document.querySelector('#show-more-button');

let keyword = "";
let page = 1;
async function searchImages(){
    keyword = searchInput.value.trim();
    const URL = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${API_KEY}&per_page=12`;

    const response = await fetch(URL);
    const data = await response.json();
    const results = data.results;

    results.map((result) => {
        console.log(result);
        const image = document.createElement('img');
        image.src = result.urls.small;
        const imageLink = document.createElement('a');
        imageLink.href = result.links.html;
        imageLink.target = "_blank";
        imageLink.appendChild(image);
        imageGallery.appendChild(imageLink);
    })

    showMoreBtn.style.display = "block";
}

searchForm.addEventListener('submit', function(e){
    e.preventDefault();
    page = 1;
    imageGallery.innerHTML = "";
    searchImages();
});

showMoreBtn.addEventListener('click', function(){
    page++;
    searchImages();
})




























// Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
//sed do eiusmod tempor incididunt ut labore et dolore magna al
//iqua. Euismod nisi porta lorem mollis aliquam ut porttitor.
// Eu nisl nunc mi ipsum faucibus vitae aliquet nec. Lectus 
// mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare. Cursus r
//isus at ultrices mi tempus imperdiet nulla malesuada pellentesque. Vel e
//lit scelerisque mauris pellentesque. Euismod quis viverra nibh cras 
//pulvinar mattis nunc. Cursus sit amet dictum sit amet justo donec enim
//. Massa eget egestas purus viverra. Tortor at auctor urna nunc. Eget dolor
function key(){
    return "Wj6UWgG20P1FLGI6WQaLNtPKTwJGYvkCRMfIOXS5bjE";
}
// morbi non arcu risus. Tristique nulla aliquet enim tortor at. Varius vel 
//pharetra vel turpis. Enim ut sem viverra aliquet eget sit amet tellus. 
//Ultrices tincidunt arcu non sodales neque sodales.

//uam id. Morbi tristique senectus et netus et malesuada fames ac turpis. Dui nunc mattis enim ut tellus elementum. Vel pharetra vel turpis nunc. Felis eget velit aliquet sagittis. Porttitor lacus luctus accumsan tortor posuere ac ut. At imperdiet dui accumsan sit amet nulla facilisi morbi tempus. Congue eu consequat ac felis donec et. Malesuada pellentesque elit eget gravida cum sociis natoque. Nunc sed velit dignissim sodales ut eu sem integer vitae. Vitae nunc sed velit dignissim sodales ut. Condimentum vitae sapien pellentesque habitant morbi tristique. Ut porttitor leo a diam sollicitudin tempor. Eu consequat ac felis donec et odio pellentesque. Mi proin sed libero enim.