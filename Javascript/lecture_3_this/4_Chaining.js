let ladder = {
    step: 0,
    up() {
        this.step++;
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    showStep() { // shows the current step
        console.log(this.step);
        return this;
    }
};
// ladder.up();
// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep();
// Que -. what changes i can do in the above code -> to call these methods in following way
ladder.up().up().up().down().showStep();

