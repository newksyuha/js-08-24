class Hamburger {
    constructor(size, filling) {
        this.size = size;
        this.filling = filling;
        this.isSpiced = false;
        this.withMayo = false;

        switch (size) {
        case 'small':
            this.price = 50;
            this.energy = 20;
            break;
        case 'large':
            this.price = 100;
            this.energy = 40;
            break;
        }

        switch (filling) {
        case 'cheese':
            this.price += 10;
            this.energy += 20;
            break;
        case 'salad':
            this.price += 20;
            this.energy += 5;
            break;
        case 'potato':
            this.price += 15;
            this.energy += 10;
            break;
        }
    }

    addSpice() {
        if (!this.isSpiced) {
            this.price += 15;
            this.isSpiced = true;
        } else {
            console.log('Is already spiced!');
        }
    }

    addMayo() {
        if (!this.withMayo) {
            this.price += 20;
            this.energy += 5;
            this.withMayo = true;
        } else {
            console.log('Is already with mayo!');
        }
    }

    showResult() {
        console.log(`Price: ${this.price}, energy ${this.energy}`);
    }
}