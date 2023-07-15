// function ageCalculator(){

    //   const birthDay = document.querySelector('.js-dateInput');
    //   const birthMonth = document.querySelector('.js-montInput');
    //   const birthYear = document.querySelector('.js-yearInput');

    //   const dayOutput = document.querySelector('.js-output-days');
    //   const monthOutput = document.querySelector('.js-output-months');
    //   const yearsOutput = document.querySelector('.js-output-years');

    //   var currentDate = new Date();
    //   var currentDay = currentDate.getDate();
    //   var currentMonth = currentDate.getMonth() + 1;
    //   var currentYear = currentDate.getFullYear();

    //   const NewDay = currentDay - birthDay.value;
    //   dayOutput.innerHTML = NewDay;

    //   const NewMonth = currentMonth - birthMonth.value;
    //   monthOutput.innerHTML = NewMonth;

    //   const NewYear = currentYear - birthYear.value;
    //   yearsOutput.innerHTML = NewYear;

    // }

    function ageCalculator() {
        const birthDay = document.querySelector('.js-dateInput');
        const birthMonth = document.querySelector('.js-montInput');
        const birthYear = document.querySelector('.js-yearInput');
  
        const dayOutput = document.querySelector('.js-output-days');
        const monthOutput = document.querySelector('.js-output-months');
        const yearsOutput = document.querySelector('.js-output-years');
  
        var currentDate = new Date();
        var currentDay = currentDate.getDate();
        var currentMonth = currentDate.getMonth() + 1;
        var currentYear = currentDate.getFullYear();
  
   
  
          // Reset output values
          dayOutput.innerHTML = '--';
          monthOutput.innerHTML = '--';
          yearsOutput.innerHTML = '--';
  
        
  
         // Check if input fields are empty
        if (birthDay.value === '') {
          birthDay.style.borderColor = 'hsl(0, 100%, 67%)';
          document.querySelector('.js-dayTittle').style.color = 'hsl(0, 100%, 67%)';
          document.querySelector('.js-emptyDay').innerHTML = 'This field is requird';
          document.querySelector('.js-emptyDay').style.color = 'hsl(0, 100%, 67%)';
          return
        } else{
          birthDay.style.borderColor = '';
          document.querySelector('.js-dayTittle').style.color = '';
          document.querySelector('.js-emptyDay').innerHTML = '';
          document.querySelector('.js-emptyDay').style.color = '';
        }
        if (birthMonth.value === '') {
          birthMonth.style.borderColor = 'hsl(0, 100%, 67%)';
          document.querySelector('.js-monthTittle').style.color = 'hsl(0, 100%, 67%)';
          document.querySelector('.js-emptyMonth').innerHTML = 'This field is requird';
          document.querySelector('.js-emptyMonth').style.color = 'hsl(0, 100%, 67%)';
          return
        }else{
          birthMonth.style.borderColor = '';
          document.querySelector('.js-monthTittle').style.color = '';
          document.querySelector('.js-emptyMonth').innerHTML = '';
          document.querySelector('.js-emptyMonth').style.color = '';
        }
  
        if (birthYear.value === '') {
          birthYear.style.borderColor = 'hsl(0, 100%, 67%)';
          document.querySelector('.js-yearTittle').style.color = 'hsl(0, 100%, 67%)';
          document.querySelector('.js-emptyYear').innerHTML = 'This field is requird';
          document.querySelector('.js-emptyYear').style.color = 'hsl(0, 100%, 67%)';
          return
        }else{
          birthYear.style.borderColor = '';
          document.querySelector('.js-yearTittle').style.color = '';
          document.querySelector('.js-emptyYear').innerHTML = '';
          document.querySelector('.js-emptyYear').style.color = '';
        }
  
        // Check if the input year is in the future
        if (birthYear.value > currentYear) {
          birthYear.style.borderColor = 'hsl(0, 100%, 67%)';
          document.querySelector('.js-yearTittle').style.color = 'hsl(0, 100%, 67%)';
          document.querySelector('.js-emptyYear').innerHTML = 'Enter a valid year';
          document.querySelector('.js-emptyYear').style.color = 'hsl(0, 100%, 67%)';
          
          return;
        } else {
          birthYear.style.borderColor = '';
          document.querySelector('.js-yearTittle').style.color = '';
          document.querySelector('.js-emptyYear').innerHTML = '';
          document.querySelector('.js-emptyYear').style.color = '';
        }
  
        // Check if the input month is valid
        var monthValue = parseInt(birthMonth.value);
        if (monthValue < 1 || monthValue > 12) {
          birthMonth.style.borderColor = 'hsl(0, 100%, 67%)';
          document.querySelector('.js-monthTittle').style.color = 'hsl(0, 100%, 67%)';
          document.querySelector('.js-emptyMonth').innerHTML = 'Enter a valid month';
          document.querySelector('.js-emptyMonth').style.color = 'hsl(0, 100%, 67%)';
  
          return;
        } else {
          birthMonth.style.borderColor = '';
          document.querySelector('.js-monthTittle').style.color = '';
          document.querySelector('.js-emptyMonth').innerHTML = '';
          document.querySelector('.js-emptyMonth').style.color = '';
        }
  
        // Check if the input day is valid
        var dayValue = parseInt(birthDay.value);
        var maxDaysInMonth = new Date(birthYear.value, monthValue, 0).getDate();
        if (dayValue < 1 || dayValue > maxDaysInMonth) {
          birthDay.style.borderColor = 'hsl(0, 100%, 67%)';
          document.querySelector('.js-dayTittle').style.color = 'hsl(0, 100%, 67%)';
          document.querySelector('.js-emptyDay').innerHTML = 'Enter a valid date';
          document.querySelector('.js-emptyDay').style.color = 'hsl(0, 100%, 67%)';
          return;
        } else {
          birthDay.style.borderColor = '';
          document.querySelector('.js-dayTittle').style.color = '';
          document.querySelector('.js-emptyDay').innerHTML = '';
          document.querySelector('.js-emptyDay').style.color = '';
        }
  
  
        var NewDay = currentDay - birthDay.value;
        if (NewDay < 0) {
          currentMonth--;
          if (currentMonth === 0) {
            currentMonth = 12;
            currentYear--;
          }
          var daysInPreviousMonth = new Date(currentYear, currentMonth, 0).getDate();
          NewDay += daysInPreviousMonth;
        }
  
        var NewMonth = currentMonth - birthMonth.value;
        if (NewMonth < 0) {
          currentYear--;
          NewMonth += 12;
        }
  
        var NewYear = currentYear - birthYear.value;
  
        // Display output only if input fields are valid
        dayOutput.innerHTML = NewDay;
        monthOutput.innerHTML = NewMonth;
        yearsOutput.innerHTML = NewYear;
  
      }


    // Theme Switcher
    
    function themeSwitcher(){
        const themeBtn = document.querySelector('.js-theme-switcher');
        const lightModebtn = document.querySelector('.js-lightmode');
        const darkModebtn = document.querySelector('.js-darkmode');

        let isDarkTheme = false;

        themeBtn.addEventListener('click', function (){

          isDarkTheme = !isDarkTheme;

            if (isDarkTheme){

                themeBtn.classList.add('toggle');
                themeBtn.style.backgroundColor = '#1E1E1E';
                lightModebtn.style.display = 'none';
                document.querySelector('.theme-toggler').style.backgroundColor = 'hsl(0, 0%, 100%)';
                document.querySelector('.theme-toggler').style.display = 'flex';
                document.querySelector('.theme-toggler').style.flexDirection = 'row-reverse';
                document.querySelector('.theme-toggler').style.alignItems = 'center';
                darkModebtn.style.display = 'block';
                darkModebtn.style.color = '#1E1E1E';

                document.querySelector('.js-main').style.backgroundColor = 'hsl(0, 1%, 44%)';
                document.querySelector('.main-container').style.backgroundColor = '#1E1E1E';
                document.querySelector('.js-dayTittle').style.color = '#FFFFFF';
                document.querySelector('.js-monthTittle').style.color = '#FFFFFF';
                document.querySelector('.js-yearTittle').style.color = '#FFFFFF';
                document.querySelector('.line-hon').style.color = '#FFFFFF';
                document.querySelector('.js-btn').style.backgroundColor = '#6EC0D8';

                const element = document.querySelector(".js-btn");

                element.addEventListener("mouseover", function() {
                    element.style.backgroundColor = "#5CDB95";
                });

                element.addEventListener("mouseout", function() {
                    element.style.backgroundColor = "#6EC0D8";
                });

                document.querySelector('.js-years').style.color = '#FFFFFF';
                document.querySelector('.js-months').style.color = '#FFFFFF';
                document.querySelector('.js-days').style.color = '#FFFFFF';
                document.querySelector('.js-output-years').style.color = '#6EC0D8';
                document.querySelector('.js-output-months').style.color = '#6EC0D8';
                document.querySelector('.js-output-days').style.color = '#6EC0D8';

                document.querySelector('.js-frontend').style.color = '#6EC0D8';
                document.querySelector('.copy').style.color = '#FFFFFF';
            } else{

              themeBtn.classList.remove('toggle');
              themeBtn.style.backgroundColor = '';
              lightModebtn.style.display = 'block';
              document.querySelector('.theme-toggler').style.backgroundColor = 'hsl(0, 0%, 8%)';
              document.querySelector('.theme-toggler').style.display = '';
              document.querySelector('.theme-toggler').style.flexDirection = '';
              document.querySelector('.theme-toggler').style.alignItems = '';
              darkModebtn.style.display = 'none';

              document.querySelector('.js-main').style.backgroundColor = 'hsl(0, 0%, 86%)';
              document.querySelector('.main-container').style.backgroundColor = 'hsl(0, 0%, 100%)';
              document.querySelector('.js-dayTittle').style.color = 'hsl(0, 1%, 44%)';
              document.querySelector('.js-monthTittle').style.color = 'hsl(0, 1%, 44%)';
              document.querySelector('.js-yearTittle').style.color = 'hsl(0, 1%, 44%)';
              document.querySelector('.line-hon').style.color = 'hsl(0, 1%, 44%)';
              document.querySelector('.js-btn').style.backgroundColor = 'hsl(259, 100%, 65%';

              const element = document.querySelector(".js-btn");
              element.addEventListener("mouseover", function() {
                element.style.backgroundColor = "hsl(0, 0%, 8%)";
              });

              element.addEventListener("mouseout", function() {
                  element.style.backgroundColor = "hsl(259, 100%, 65%";
              });

              document.querySelector('.js-years').style.color = 'hsl(0, 0%, 8%)';
              document.querySelector('.js-months').style.color = 'hsl(0, 0%, 8%)';
              document.querySelector('.js-days').style.color = 'hsl(0, 0%, 8%)';
              document.querySelector('.js-output-years').style.color = 'hsl(259, 100%, 65%';
              document.querySelector('.js-output-months').style.color = 'hsl(259, 100%, 65%';
              document.querySelector('.js-output-days').style.color = 'hsl(259, 100%, 65%';

              document.querySelector('.js-frontend').style.color = 'hsl(259, 100%, 65%';
              document.querySelector('.copy').style.color = 'hsl(0, 0%, 8%)';


            }
        });
    }

    themeSwitcher();
  