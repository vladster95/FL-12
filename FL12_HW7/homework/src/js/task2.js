let t1 = 100, t2 = 50, t3 = 25, t4 = 8;
let prize_mn = 2;
let isReady = confirm('Do you want to play a game?');
let game_restart;
let g_continue;
let attempts_default = 3;
let rnd_pool_inc = 4;
let prize_pool = [t1, t2, t3];
let prize_on_attempt = [1+1,1,0];
let attempts_cur, prize_multiplier,total_prize, rnd_number, rnd_max, theNumber;
if (isReady) {
    do {
        attempts_cur = attempts_default;
        rnd_max = t4;
        total_prize = 0;
        prize_multiplier = 1;
        while (attempts_cur > 0) {
            rnd_number = Math.floor(Math.random() * Math.floor(rnd_max+1))
            console.log(rnd_number);
            theNumber = parseInt(prompt('Choose a roulette pocket number from 0 to ' + rnd_max + '\n' +
                'Attempts left: ' + attempts_cur + '\n' +
                'Total prize: ' + total_prize + '$\n' +
                'Possible prize on current attempt: ' +
                prize_pool[prize_on_attempt[attempts_cur - 1]] * prize_multiplier + '$\n', ''));
            if (isNaN(theNumber)) {
                continue;
            }
            if (rnd_number === theNumber) {
                g_continue = confirm('Congratulation, you won!\n Your prize is:' +
                    prize_pool[prize_on_attempt[attempts_cur - 1]] * prize_multiplier
                    + '$.\n Do you want to continue?');
                if (g_continue) {
                    total_prize += prize_pool[prize_on_attempt[attempts_cur-1]] * prize_multiplier;
                    rnd_max += rnd_pool_inc;
                    prize_multiplier *= prize_mn;
                    attempts_cur = attempts_default;
                    continue;
                } else {
                    break;
                }
            } else {
                attempts_cur--;
            }
        }
        alert('Thank you for your participation. Your prize is:' + total_prize + '$');
        game_restart = confirm('Do you want to play again?');
    } while (game_restart);
} else {
    alert('You did not become a billionaire, but can.');
}
