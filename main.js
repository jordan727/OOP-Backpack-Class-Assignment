class backpack {
    constructor(color, size) {
        this.color = color;
        this.size = size;
        this.items = [];
        this.open = false;
    }

    openBag() {
        this.open = true;
        console.log("Your bag is open")
    }

    closeBag() {
        this.open = false;
        console.log("Your bag is closed")
    }

    putIn(item) {
        if (this.open === true) {
            this.items.push(item)
        }
        console.log("You put " + item + " in your bag")
    }

    takeOut(item) {
        if (this.open === true) {
            for (let i = 0; i < this.items.length; i++) {
                if (this.items[i] == item) {
                    this.items.splice(i, 1);
                }
                //use indexOf
            }
        }
        console.log("You took out " + item + " from your bag")
    }
}

let backpack1 = new backpack("blue", "small");
let backpack2 = new backpack("red", "medium");
let backpack3 = new backpack("green", "large");

console.log(backpack2);
backpack2.openBag();
backpack2.putIn("lunch");
backpack2.putIn("jacket");
backpack2.closeBag();
console.log(backpack2);
backpack2.openBag();
backpack2.takeOut("jacket");
backpack2.closeBag();
console.log(backpack2);