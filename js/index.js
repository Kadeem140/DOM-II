// Your code goes here
// * [ ] `mouseover`
// * [ ] `keydown`
// * [ ] `wheel`
// * [ ] `drag / drop`
// * [ ] `load`
// * [ ] `focus`
// * [ ] `resize`
// * [ ] `scroll`
// * [ ] `select`
// * [ ] `dblclick`


//  const DomObj = document.querySelector('body');//overAching function name) //toggle function name;
    const firstImgChange = document.querySelector('.intro img');//mouseenter(changes img src)
    const firstImgChangeBack = document.querySelector('.intro img');//mouseleave(changes img src back to original)
    const letMeKnow = document.querySelector('body');// keydown(alerts ev.type, ev.target, ev.currentTarget)
    const clickBgChange = document.querySelector('#firstbtn');//click(changes background color)
    const dblClickBgChange = document.querySelector('#firstbtn');//doubleclick (turns color back white)
    const signUpNow = document.querySelectorAll('.destination .btn')//sign up input form.
    const newTitle = document.querySelector('.logo-heading');//mouseover(change fun bus title to Bus of Fun)
    const footerTextSize = document.querySelector('.footer');//mpusedown
    const returnFooter = document.querySelector('.footer');//mouseup
    const pickCont = document.querySelector('.content-pick');
    const stopNav = document.querySelector('nav .nav-link');

        function makeblue(event) {
            event.stopPropagation();
            event.currentTarget.style.backgroundColor = "#40E0D0";
        }

        function makeRed(event) {
            event.currentTarget.style.backgroundColor = 'red';
        }

            stopNav.addEventListener('mouseenter', (e) => {
                e.preventDefault();
                e.target.style.fontSize = "3rem";
                console.log("Im working NAV");
                console.log(e);
            });

            firstImgChange.addEventListener('mouseenter', () => {
                firstImgChange.src = "img/NewFunBus.jpg";
                // console.log("I'm working!")
            })

            firstImgChangeBack.addEventListener('mouseleave', () => {
                firstImgChangeBack.src = "img/fun-bus.jpg";
            })

            letMeKnow.addEventListener('keydown', (ev) => {alert(ev.keyCode)});

            clickBgChange.addEventListener('click', makeblue)
            
            pickCont.addEventListener('click', makeRed)

            
            dblClickBgChange.addEventListener('dblclick', () => {
                document.querySelector('.content-pick').style.backgroundColor = "white";})

            newTitle.addEventListener('mouseover', () => {
                newTitle.textContent = "Bus of Fun! Come on in!";
            });

            signUpNow[1].addEventListener('click', () => {
                confirm("Do you want to sign up?");
            })

            signUpNow[2].addEventListener('click', () => {
                prompt("Come on in!", "Your name here.");
                return "Okay!";
            })

    
    