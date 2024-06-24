var add_btn = document.getElementById('add_btn')
var grid = document.getElementById('parent_grid')
var modal = document.getElementById("myModal");
var btn = document.getElementById("add_btn");
var close_btn = document.getElementsByClassName("close")[0];
var search_btn = document.getElementById('search_btn')
var search_input = document.getElementById('search')
var cardcount = 0
var storage = localStorage.getItem('info')

if (storage === null) { storage = [] }
else { storage = JSON.parse(storage) }


function updateStorage(storage) {
    let string = JSON.stringify(storage)
    localStorage.setItem("info", string);
}

for (let i = 0; i < storage.length; i++) {

    let newDiv = document.createElement('div');
    newDiv.innerHTML = card(storage[i]['title'], storage[i]['body'], storage[i]['create'], storage[i]['update'])
    newDiv.setAttribute("class", "bg-gray-800 text-white p-5 rounded-2xl relative card");


    grid.appendChild(newDiv)
    cardcount += 1;
}

function timeToMinutes(time) {
    hours = time.split(':')[0]
    minutes = time.split(':')[1]
    return hours * 60 + minutes;
}

search_btn.onclick = function () {
    query = search_input.value
    if (query.trim() === '') return
    result = []
    for (i = 0; i < storage.length; i++) {
        if (storage[i]['title'].trim() === query) result.push(storage[i])
    }
    grid.innerHTML = ''
    console.log(result)

    result.sort((a, b) => timeToMinutes(b.update) - timeToMinutes(a.update));

    for (let i = 0; i < (result.length); i++) {

        let newDiv = document.createElement('div');
        newDiv.innerHTML = card(result[i]['title'], result[i]['body'], result[i]['create'], result[i]['update'])
        newDiv.setAttribute("class", "bg-gray-800 text-white p-5 rounded-2xl relative card");


        grid.appendChild(newDiv)
        cardcount += 1;
    }
}

btn.onclick = function () {
    modal.style.display = "block";
    let submit_btn = document.getElementById('submit_btn')
    let title_input = document.getElementById('title_input')
    let body_input = document.getElementById('body_input')

    submit_btn.onclick = () => {
        title = title_input.value
        body = body_input.value
        console.log(title + ' ' + body)
        d = new Date()
        storage.push({ "title": title, "body": body, "update": `${d.getHours()}:${d.getMinutes()}`, "create": `${d.getHours()}:${d.getMinutes()}` })
        let string = JSON.stringify(storage)
        localStorage.setItem("info", string);

        newDiv = document.createElement('div');
        newDiv.innerHTML = card(title, body, `${d.getHours()}:${d.getMinutes()}`, `${d.getHours()}:${d.getMinutes()}`)
        newDiv.setAttribute("class", "bg-gray-800 text-white p-5 rounded-2xl relative card");


        grid.appendChild(newDiv)
        cardcount += 1;
    }
}

close_btn.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function edit(button) {
    modal.style.display = "block";
    let submit_btn = document.getElementById('submit_btn')
    let title_input = document.getElementById('title_input')
    let body_input = document.getElementById('body_input')
    const card = button.closest('.card');
    let old_title = card.querySelector('.title').textContent;
    for (i = 0; i < storage.length; i++) {
        if ((storage[i]['title']).trim() === old_title.trim()) {
            var index = i
        }
    }
    submit_btn.onclick = () => {
        title = title_input.value
        body = body_input.value
        d = new Date()
        storage[index]['title'] = title
        storage[index]['body'] = body
        storage[index]['update'] = `${d.getHours()}:${d.getMinutes()}`
        updateStorage(storage)
        // console.log(index)
    }
}

function deleteCard(button) {
    const card = button.closest('.card');
    let title = card.querySelector('.title').textContent;
    console.log(storage)
    for (i = 0; i < storage.length; i++) {
        if ((storage[i]['title']).trim() === title.trim()) {
            var index = i
            storage.splice(index, 1)
            updateStorage(storage)
        }
    }
    card.remove();
}

function card(title, body, create, update) {
    d = new Date()
    return `
        <div class="flex flex-wrap items-center justify-between mx-auto">
            <div class="title text-3xl font-medium pb-2">${title}</div>
            <div>
                <button type="submit" onclick="edit(this)" class="p-2.5 ms-2 text-sm text-white bg-yellow-500 rounded-lg card-button">
                    <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100"
                        viewBox="0,0,256,256">
                        <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt"
                            stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0"
                            font-family="none" font-weight="none" font-size="none" text-anchor="none"
                            style="mix-blend-mode: normal">
                            <g transform="scale(5.12,5.12)">
                                <path
                                    d="M46.57422,3.42578c-0.94922,-0.94922 -2.19531,-1.42578 -3.44141,-1.42578c-1.24609,0 -2.49219,0.47656 -3.44141,1.42578c0,0 -0.07031,0.06641 -0.16016,0.16016c-0.00781,0.00781 -0.01953,0.01172 -0.02734,0.01953l-35.20312,35.19922c-0.12109,0.125 -0.21094,0.27734 -0.25781,0.44922l-2.00781,7.48828c-0.09375,0.34375 0.00391,0.71094 0.25781,0.96484c0.19141,0.19141 0.44531,0.29297 0.70703,0.29297c0.08594,0 0.17188,-0.01172 0.25781,-0.03516l7.48828,-2.00781c0.17188,-0.04687 0.32422,-0.13672 0.44922,-0.26172l35.19922,-35.19531c0.01172,-0.01172 0.01563,-0.02734 0.02344,-0.03906c0.08984,-0.08984 0.15234,-0.15234 0.15234,-0.15234c1.90625,-1.90234 1.90625,-4.98437 0.00391,-6.88281zM45.16016,4.83984c1.11719,1.11719 1.11719,2.9375 0,4.05469c-0.33203,0.32813 -0.61328,0.61328 -0.85547,0.85547l-4.05469,-4.05469c0.46094,-0.46094 0.85547,-0.85547 0.85547,-0.85547c0.53906,-0.54297 1.26172,-0.83984 2.02734,-0.83984c0.76563,0 1.48438,0.30078 2.02734,0.83984zM5.60547,41.15234l3.24219,3.24219l-4.43359,1.19141z">
                                </path>
                            </g>
                        </g>
                    </svg>
                </button>
                <button type="submit" onclick="deleteCard(this)" class="p-2.5 ms-2 text-sm text-white bg-red-700 rounded-lg card-button" >
                    <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100"
                        viewBox="0,0,256,256">
                        <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt"
                            stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0"
                            font-family="none" font-weight="none" font-size="none" text-anchor="none"
                            style="mix-blend-mode: normal">
                            <g transform="scale(8.53333,8.53333)">
                                <path
                                    d="M6,8v16c0,1.1 0.9,2 2,2h14c1.1,0 2,-0.9 2,-2v-16zM24,4h-6c0,-0.6 -0.4,-1 -1,-1h-4c-0.6,0 -1,0.4 -1,1h-6c-0.6,0 -1,0.4 -1,1c0,0.6 0.4,1 1,1h18c0.6,0 1,-0.4 1,-1c0,-0.6 -0.4,-1 -1,-1z">
                                </path>
                            </g>
                        </g>
                    </svg>
                </button>
            </div>
        </div>
        <div class="text-lg pb-4 body">${body}</div>
        <div class="absolute bottom-0 left-0 right-0 px-5 py-3">
            <div class="flex flex-wrap items-center justify-between mx-auto text-base pt-2 text-gray-400">
                <div>
                    created at ${create}
                </div>
                <div class="updated" >
                    updated at ${update}
                </div>
            </div>
        </div>
    `
}
