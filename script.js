const data = [
  {
    "title": "Work",
    "timeframes": {
      "daily": {
        "current": 5,
        "previous": 7
      },
      "weekly": {
        "current": 32,
        "previous": 36
      },
      "monthly": {
        "current": 103,
        "previous": 128
      }
    }
  },
  {
    "title": "Play",
    "timeframes": {
      "daily": {
        "current": 1,
        "previous": 2
      },
      "weekly": {
        "current": 10,
        "previous": 8
      },
      "monthly": {
        "current": 23,
        "previous": 29
      }
    }
  },
  {
    "title": "Study",
    "timeframes": {
      "daily": {
        "current": 0,
        "previous": 1
      },
      "weekly": {
        "current": 4,
        "previous": 7
      },
      "monthly": {
        "current": 13,
        "previous": 19
      }
    }
  },
  {
    "title": "Exercise",
    "timeframes": {
      "daily": {
        "current": 1,
        "previous": 1
      },
      "weekly": {
        "current": 4,
        "previous": 5
      },
      "monthly": {
        "current": 11,
        "previous": 18
      }
    }
  },
  {
    "title": "Social",
    "timeframes": {
      "daily": {
        "current": 1,
        "previous": 3
      },
      "weekly": {
        "current": 5,
        "previous": 10
      },
      "monthly": {
        "current": 21,
        "previous": 23
      }
    }
  },
  {
    "title": "Self Care",
    "timeframes": {
      "daily": {
        "current": 0,
        "previous": 1
      },
      "weekly": {
        "current": 2,
        "previous": 2
      },
      "monthly": {
        "current": 7,
        "previous": 11
      }
    }
  }
]



const app = (()=>{

const dailyCta= document.getElementById('daily')
const weeklyCta= document.getElementById('weekly')
const monthlyCta= document.getElementById('monthly')
const allDailyCurrent = document.querySelectorAll('.current')

const eventHandlers = ()=>{
    dailyCta.addEventListener('click', changeDaily)
    weeklyCta.addEventListener('click', changeWeekly)
    monthlyCta.addEventListener('click', changeMonthly)

}

const changeDaily = ()=>{

    data.forEach((item)=>{
        // get names of each div, make them same as class name, lower case and remove spaces
        let sections  = item.title.toLowerCase();
        let dailyTimes = item.timeframes.daily.current;
        let removeSpace = sections.replace(" ", "");
        let sectionToUpdate = document.querySelectorAll(`.${removeSpace} .daily .current`)
    
        sectionToUpdate.forEach((element)=>{
            element.innerHTML = `${dailyTimes}hrs`
         })
    
 
    })

dailyCta.classList.add('active')
monthlyCta.classList.remove('active')
weeklyCta.classList.remove('active')


}

const changeWeekly = ()=>{
    data.forEach((item)=>{
        // get names of each div, make them same as class name, lower case and remove spaces
        let sections  = item.title.toLowerCase();
        let weeklyTimes = item.timeframes.weekly.current;
        let removeSpace = sections.replace(" ", "");
        let sectionToUpdate = document.querySelectorAll(`.${removeSpace} .daily .current`)
        sectionToUpdate.forEach((element)=>{
            element.innerHTML = `${weeklyTimes}hrs`
     })
    
 
})


dailyCta.classList.remove('active')
monthlyCta.classList.remove('active')
weeklyCta.classList.add('active')


}


const changeMonthly = ()=>{
    data.forEach((item)=>{
        // get names of each div, make them same as class name, lower case and remove spaces
        let sections  = item.title.toLowerCase();
        let weeklyTimes = item.timeframes.monthly.current;
        let removeSpace = sections.replace(" ", "");
        let sectionToUpdate = document.querySelectorAll(`.${removeSpace} .daily .current`)
        sectionToUpdate.forEach((element)=>{
            element.innerHTML = `${weeklyTimes}hrs`
     })
    
 
})

dailyCta.classList.remove('active')
monthlyCta.classList.add('active')
weeklyCta.classList.remove('active')




}








return {

    init:()=>{

eventHandlers()

    }
}




})()

app.init()