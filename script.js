const summary = document.querySelectorAll('.sum');
const summaryIcon = document.querySelectorAll('.sum img');
const summaryCategory = document.querySelectorAll('.sum h3');
const summaryValue = document.querySelectorAll('.sum .value');
const avg = document.querySelector('#result');
const percents = document.querySelector('.percents');
const strong = document.querySelector('strong');

    fetch('./data.json')
    .then(response => response.json())
    .then(data=>getData(data))

function getData(data) {
    summaryIcon.forEach((summary,idx) => {
        summary.setAttribute('src',data[idx].icon)
    })
    summaryCategory.forEach((summary,idx) => {
        summary.innerHTML = data[idx].category
    })
    summaryValue.forEach((summary,idx) => {
        summary.innerHTML = data[idx].score
    })
    let summaryScore = 0; 
    
    data.forEach(data=>{
        summaryScore = summaryScore + data.score
    })
    avg.innerHTML = (summaryScore/4).toFixed(0)
    let avgValue = avg.innerHTML
    percents.innerHTML = scale(avgValue, 0, 100, 10, 95).toFixed(0) + "%";
    if(avgValue >=0 && avgValue<25){
        strong.innerHTML = "Bad"
    }else if(avgValue >=25 && avgValue<50){
        strong.innerHTML = "OK"
    }else if(avgValue >=50 && avgValue<80){
        strong.innerHTML = "Great"
    }else if(avgValue >=80 && avgValue<100){
        strong.innerHTML = "Excellent"
    }else{
        strong.innerHTML = "Perfect"
    }
}
function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

