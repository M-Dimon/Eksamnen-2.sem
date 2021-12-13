

/* loop (good) = Tab effect , if else = Uret, array = Get elements by, var(good) = variable function (good), dom, (document get elemente) (good) */

        function openCity(evt, cityName) {
            var i, tabcontent, tablinks;
            tabcontent = document.getElementsByClassName("tabcontent");
            for (i = 0; i < tabcontent.length; i++) {
              tabcontent[i].style.display = "none";
            }
            tablinks = document.getElementsByClassName("tablinks");
            for (i = 0; i < tablinks.length; i++) {
              tablinks[i].className = tablinks[i].className.replace(" active", "");
            }
            document.getElementById(cityName).style.display = "block";
            evt.currentTarget.className += " active";
          }
            document.getElementById("defaultOpen").click();

            const hour = new Date().getHours();
            let greeting;

            if (hour < 18) {
              greeting = "Godmorgen";
            } else {
              greeting = "Godeftermiddag";
            }

            document.getElementById("demo").innerHTML = greeting;
