window.onload = function() {
    let createDiv = document.createElement("div");
    createDiv.id = "keyboard";
    document.body.appendChild(createDiv);
    const form = document.createElement("form");
    const input = document.createElement("input");
    form.className = "cases";
    input.className = "input"
    form.appendChild(input);
    document.body.appendChild(form);


    const keyboard = [96, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61, NaN, NaN, 113, 119, 101,
        114, 116, 121, 117, 105, 111, 112, 91, 93, 92, NaN, NaN, 97, 115,
        100, 102, 103, 104, 106, 107, 108, 59, 39, 13, NaN, 92, 122, 120, 99, 118, 98, 110, 109, 46, 44, 47, NaN, NaN, NaN, NaN, NaN, 32,
        NaN, NaN, NaN, NaN, NaN
    ];

    //CREATE KEYBOARD!!!!!!!!!!

    let out = "";

    for (let i = 0; i < keyboard.length; i++) {
        if (i === 14 || i === 29 || i == 42 || i == 56 || i == 68) {
            out += '<div class="clearFix"></div>';
        }
        if (i === 13) {
            out += "<div class='key backspace' >Backspace</div>";
            continue;
        }
        if (i === 14) {
            out += "<div class='key tab ' >Tab</div>";
            continue;
        }

        if (i === 28) {
            out += "<div class='key del' >Del</div>";
            continue;
        }

        if (i === 29) {
            out += "<div class='key caps' >Caps Lock</div>";
            continue;
        }
        if (i === 41) {

            out += "<div class='key enter' data='" + keyboard[i] + "' >Enter</div>";
            continue;
        }
        if (i === 42) {
            out += "<div class='key shift shiftLeft'>Shift</div>";
            continue;
        }
        if (i === 54) {
            out += "<div class='key arrowUp' >&#9650;</div>";
            continue;
        }
        if (i === 55) {
            out += "<div class='key shift shiftRight'  >Shift</div>";
            continue;
        }
        if (i === 56) {
            out += "<div class='key ctrl ctrlLeft' >Ctrl</div>";
            continue;
        }

        if (i === 57) {
            out += "<div class='key win'>Win</div>";
            continue;
        }

        if (i === 58) {
            out += "<div class='key alt altLeft' >Alt</div>";
            continue;
        }

        if (i === 59) {

            out += '<div class="key space" data="' + keyboard[59] + '"></div>'
            continue;
        }

        if (i === 60) {
            out += "<div class='key alt altRight' >Alt</div>";
            continue;
        }
        if (i === 61) {
            out += "<div class='key ctrl ctrlRight' >Ctrl</div>";
            continue;
        }
        if (i === 62) {
            out += "<div class='key arrowLeft' >&#9668;</div>";
            continue;
        }
        if (i === 63) {
            out += "<div class='key arrowDown' >&#9660;</div>";
            continue;
        }
        if (i === 64) {
            out += "<div class='key arrowRight' >&#9658;</div>";
            continue;
        }

        out += '<div class="key" data="' + keyboard[i] + '">' + String.fromCharCode(keyboard[i]) + '</div>';

    }
    document.querySelector("#keyboard").innerHTML = out;


    //CREATE ACTIVE CLASS FOR ALL BUTTONS (control with keyboard)
    document.onkeypress = function(event) {
        document.querySelectorAll('#keyboard .key').forEach(function(element) {
            element.classList.remove('active');
        });
        document.querySelector('#keyboard .key[data="' + event.keyCode + '"]').classList.add('active');

    };


    //CREATE ACTIVE CLASS FOR ALL BUTTONS (control with MOUSE)
    document.querySelectorAll('#keyboard .key').forEach(
        function(element) {
            element.onclick = function() {
                document.querySelector('.input').value += event.target.innerText;
                document.querySelectorAll('#keyboard .key').forEach(function(element) {
                    element.classList.remove('active');
                });
                let code = this.getAttribute('data');
                this.classList.add('active');
            }
        });
};