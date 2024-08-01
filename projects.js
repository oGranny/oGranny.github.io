const wrapper = document.getElementById("wrapper");
const data = [
    
    {
        "thumbnail": "./images/smirk.png",
        "title": "Smirk",
        "body": "Meme sharing app made with flutter, backend API written in flask and cloud functions",
        "githubUrl": "https://github.com/smirk-app" 
    },
    {
        "thumbnail": "./images/wallpiper.png",
        "title": "Wallpiper",
        "body": "Wallpaper app built using flutter sdk",
        "githubUrl": "https://github.com/oGranny/wallpiper",
        "demoUrl": "https://wallpiper.web.app/" 
    },
    {
        "thumbnail": "./images/tempMail.jpg",
        "title": "Temp Mail",
        "body": "a command line program to generate disposable emails",
        "githubUrl": "https://github.com/oGranny/tempmail" 
    },
    {
        "thumbnail": "./images/TodoApp.jpg",
        "title": "Rainbow Todo App",
        "body": "Todo app built using flutter",
        "githubUrl": "https://github.com/oGranny/Rainbow-Todo-App",
        "demoUrl": "https://ogranny.github.io/Projects/Todo" 
    },
    {
        "thumbnail": "./images/stock-warehouse.png",
        "title": "Stock Warehouse",
        "body": "Web app build using React, Meteorjs and Tailwind to quickly get data of stock",
        "githubUrl": "https://github.com/oGranny/stock_warehouse", 
    }
]

let swiperData = data;


const generateSlider = () => {
  let out = ''
  for (let i = 0; i < swiperData.length; i++){
	out += `
		<div class="swiper-slide">
            <div>
                <div class="post">
                  	<img class="thumbnail" src="${swiperData[i].thumbnail}" />
                  	<div class="post-preview">
						<h6 class="post-title">${swiperData[i].title}</h6>
						<p class="post-intro">
						${swiperData[i].body}
						</p>
						<a href="${swiperData[i].githubUrl}" target="_blank">Read More
						</a>
						${(swiperData[i].demoUrl != null) ? `<a href="${swiperData[i].demoUrl}" target="_blank" style="margin-left: 5rem">Live demo</a>` : ""}
					</div>
        	    </div>
            </div>
        </div>
	`;
    `
    <div class="swiper-slide">
              <div>
                <div class="post">
                  <img class="thumbnail" src="./images/TodoApp.jpg" />
                  <div class="post-preview">
                    <h6 class="post-title">Rainbow Todo App</h6>
                    <p class="post-intro">
                      Todo app built using flutter with infinite colors.
                    </p>
                    <a href="https://github.com/oGranny/Rainbow-Todo-App" target="_blank">Read More
                    </a>
                    <a href="https://ogranny.github.io/Projects/Todo" target="_blank" style="margin-left: 5rem">Live
                      demo</a>
                  </div>
                </div>
              </div>
            </div>`
  }
  console.log(out)
  return out
}


wrapper.innerHTML =  generateSlider();
