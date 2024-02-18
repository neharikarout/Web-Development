function createCard(title, cName , views, monthsOld , duration, thumbnail)
{
    // Finish this function 

    let viewStr
    if(views < 10000)
    {
        viewStr = views;
    }
    else if(views > 1000000)
    {
        viewStr = views/10000 + "M";
    }
    else{
        viewStr = views/1000 + "K";
    }


    let year 
    if(monthsOld>12)
    {
        
    }
    let html = ` <div class="card">
    <div class="image">
    <img src="${thumbnail}"alt="">
    <div class="capsule">${duration}</div>
    </div>
    <div class="text">
        <h1> ${title}</h1>
        <p> ${cName} . ${viewStr} views . ${monthsOld} months ago</p>
    </div>


</div>`

document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html;
}



createCard("Introduction to Backend | Sigma Web Dev video #2", "CodeWithHarry", 560000, 7, "31:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw")

createCard("Introduction to React JS | Sigma Web Dev video #3", "CodeWithHarry", 5600, 12, "31:24", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw")

createCard("Introduction to React JS | Sigma Web Dev video #3", "CodeWithHarry", 56000000, 4, "1:24", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw")

createCard("Introduction to React JS | Sigma Web Dev video #3", "CodeWithHarry", 560, 5, "31:24", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw")