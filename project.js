let dataProject = []

function addProject(event) {
    event.preventDefault()

    let showProjectName = document.getElementById("input-projectname").value;
    let showStartDate = document.getElementById("input-startdate").value;
    let showDateEnd = document.getElementById("input-enddate").value;
    let showDescription = document.getElementById("input-description").value;
    let showNode = document.getElementById("node").value;
    let showTypescript = document.getElementById("typescript").value;
    let showReact = document.getElementById("react").value;
    let showNext = document.getElementById("next").value;
    let showImage = document.getElementById('input-image').value;
    
    console.log(showProjectName)
    console.log(showStartDate) 
    console.log(showDateEnd) 
    console.log(showDescription) 
    console.log(showNode)
    console.log(showTypescript)
    console.log(showReact)
    console.log(showNext)
    console.log(showImage)
     
    //untuk menampilkan URL gambar
    //image = URL.createObjectURL(image)

    let project = {
        
        showProjectName,
        showStartDate,
        showDateEnd,
        showDescription,
        showNode,
        showTypescript,
        showReact,
        showNext,
        showImage,
        postAt: new Date(),
        author: "David Beckham"
    }
    
    dataProject.push(project)
    console.log(dataProject)

    renderBlog()
} 

function renderBlog() {
    document.getElementById("description").innerHTML = ''
   
    for (let index = 0; index < dataProject.length; index++){
       console.log(dataProject[index])

       document.getElementById("Description").innerHTML += `
      
       <div class="project-list-item">
           <div class="project-img">
               <img src="${dataProject[index].image}">
           </div>
           <div class="project-content">
               <div class="btn-group">
                   <button class="btn-edit">Edit Post</button>
                   <button class="btn-post">Post Blog</button>
               </div>
               <h1>
                   <a href="project-detail.html" target="_blank">
                       ${dataProject[index].ProjectName}
                   </a>
               </h1>
               <div class="detail-project-content">
                   ${getFullTime(dataProject[index].postAt)} | ${dataProject[index].author}

               </div>
               <p>
                   ${dataProject[index].Description}
               </p>
                <div>
                    <p style="font-size: 15px; color: grey">${getDistanceTime(DataProject[index].postAt)}</p>
                </div>
           </div>
       </div>
   </div>
   `
    }
}

function getFullTime(time) {

    //time = new Date()
    //console.log(time)

    let monthName = ['Jan', 'Feb', 'Mar', 'Apr', 'Jun', 'Jul', 'Aug','Sep', 'Oct', 'Nov', 'Dec']
    //console.log(monthName[8])

    let date = time.getDate()
    console.log(Date)

    let monthIndex = time.getMonth()
    console.log(monthIndex)

    let year = time.getFullYear()
    console.log(year)

    let hours = time.getHours()
    console.log(hours)

    let minutes = time.getMinutes()
    console.log(minutes)

    if (hour <= 9) {
        hour ="0" + minutes 
    }
    
    else if (minutes <= 9) {
        minutes = "0" + minutes
    }

    return `${date} ${monthName[monthIndex]} ${year} ${hours}:${minutes}WIB`

    
}

function getDistanceTime(time) {

    let timeNow = new Date()
    let timePost = time

    let distance = timeNow-timePost //milisecond(detik)
    console.log(distance)

    let milisecond = 1000 // 1000 adalah milisecond

    let secondInHours = 3600 // itungan jam perdetik
    let hoursInDay = 24 // itungan jam per hari

    let distanceDay = Math.floor(distance / (milisecond * secondInHours * hoursInDay))
    let distanceHour = Math.floor(disatance / (milisecond * 60 * 60))
    let distanceMinutes = Math.floor(distance / (milisecond * 60)) 
    let distanceSecond = Math.floor(distance / milisecond)

    if (distanceDay > 0) {
        return `$(distanceDay) day(s) ago`
    } else if (distanceHours > 0) {
        return `$(distanceHours) hour(s) ago`
    }  else if (distanceMinutes > 0) {
        return `$(distanceMinutes) minute(s) ago`
    } else {
        return `$(distanceSecond) second(s) ago`
    }
}
setInterval(function() {
    renderBlog()
}, 1000)





