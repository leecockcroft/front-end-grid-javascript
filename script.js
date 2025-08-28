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
    dailyCta.addEventListener('click', ()=> changePeriod('daily'))
    weeklyCta.addEventListener('click', ()=> changePeriod('weekly'))
    monthlyCta.addEventListener('click',()=> changePeriod('monthly'))

}




const changePeriod = (period)=>{
    data.forEach((item)=>{
        // get names of each div, make them same as class name, lower case and remove spaces
        let sections  = item.title.toLowerCase();
        let periodTimes = item.timeframes[period].current;
        let removeSpace = sections.replace(" ", "");
        let sectionToUpdate = document.querySelectorAll(`.${removeSpace} .daily .current`)
        let previousAmount =item.timeframes[period].previous;
        let previousToUpdate = document.querySelectorAll(`.${removeSpace} .daily .previous`)
        sectionToUpdate.forEach((element)=>{
            element.innerHTML = `${periodTimes}hrs`
     })
       previousToUpdate.forEach((element)=>{
            element.innerHTML = `Last Month ${previousAmount}hrs`
         })
    
    
 
})




}







return {

    init:()=>{

eventHandlers()

    }
}




})()

app.init()