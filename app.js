        const buttons = document.querySelectorAll('.simon-button');
        let h2 = document.querySelector('h2');
        h2.textContent = "0";
        let sequence = [];
        let userSequence = [];
        let level = 0;
        let Started = false;
        const btns = ['red', 'blue', 'green', 'yellow'];
        document.addEventListener('keypress', () => {
            if (Started == false) {
                Started = true;
                console.log("Game started");
                levelUp();
            }
        });
        
        function btnFlash(btn) {
            btn.classList.add('active');
            setTimeout(() => {
                btn.classList.remove('active');
            }, 300);
        }

        function levelUp() {
            userSequence = [];
            level++;
            h2.textContent = level;

            let randomIndex = Math.floor(Math.random() * btns.length);
            let randColor = btns[randomIndex];
            let randBtn = document.querySelector(`.${randColor}`);
            sequence.push(randColor);
            console.log("Current sequence: ", sequence);
            btnFlash(randBtn);
        }

        function checkResult(idx) {
            if (userSequence[idx] === sequence[idx]) {
                if (userSequence.length == sequence.length) {
                    setTimeout(() => {
                        console.log("Correct! Next Level.");
                        levelUp();
                    }, 1000);
                }
            } else {
                console.log("Wrong! Game Over.");
                alert("Wrong! Game Over. Press any key to restart.");
                resetGame();
            }
        }

        function btnPress() {
            let btnId = this.id;
            btnFlash(this);
            userSequence.push(btnId);
            console.log(userSequence);
            checkResult(userSequence.length - 1);
        }

        for(btn of buttons) {
            btn.addEventListener('click', btnPress);
        }

        function resetGame() {
            sequence = [];
            userSequence = [];
            level = 0;
            Started = false;
            h2.textContent = "0";
            console.log("Game reset");
            console.clear();
        }
