function display(){
    let a = new Date()
      let hours=a.getHours()
      let minutes=a.getMinutes()
      let seconds=a.getSeconds()
      let date=a.getDate()
      let day=a.getDay()
      if(day==0)
      da.innerHTML="SUN"
      if(day==1)
      da.innerHTML="MON"
      if(day==2)
      da.innerHTML="TUE"
      if(day==3)
      da.innerHTML="WED"
      if(day==4)
      da.innerHTML="THU"
      if(day==5)
      da.innerHTML="FRI"
      if(day=6)
      da.innerHTML="SAT"
      dat.innerHTML=date
      h.innerHTML=hours
      m.innerHTML=minutes
      s.innerHTML=seconds
    }
    setInterval(display,1000)
    