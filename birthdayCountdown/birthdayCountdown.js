document.addEventListener("DOMContentLoaded", function() {

    const birthdayInput = document.getElementById("birthday")
    const output = document.getElementById("output")
  
    birthdayInput.addEventListener("input", function() {

      const today = new Date()
      const birthday = new Date(birthdayInput.value)
      let nextBirthday = new Date(today.getFullYear(), birthday.getMonth(), birthday.getDate())
    
      if (nextBirthday < today) {
        nextBirthday = new Date(today.getFullYear() + 1, birthday.getMonth(), birthday.getDate())
      }
  
      const millisecondsUntilBirthday = nextBirthday - today;
      const daysUntilBirthday = millisecondsUntilBirthday / 1000 / 60 / 60 / 24
  
      output.innerHTML = `Your birthday is in ${Math.ceil(daysUntilBirthday)} day(s)!`
      
    });

}); 

