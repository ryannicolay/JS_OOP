// Exercise 1

function extend(Child, Parent) {
        Child.prototype = Object.create(Parent.prototype);
        Child.prototype.constructor = Child;
}

function HtmlElement() {
        this.click = function() {
                console.log('clicked');
        };

}

HtmlElement.prototype.focus = function() {
        console.log('focused');
}

HtmlElement.prototype.render = function() {
        return '';
}

function HtmlSelectElement(items = []) {
        this.addItem = function(item) {
                this.items.push(item);
        };
        this.items = items;
        this.removeItem = function(item) {
                this.items.splice(this.items.indexOf(item), 1);
        }
        this.render = function() {
                return `
<select>${this.items.map(item => `
        <option>${item}</option>`).join('')}
</select>`;
        }
}

HtmlSelectElement.prototype = new HtmlElement();
HtmlSelectElement.prototype.constructor = HtmlSelectElement;


function HtmlImageElement(src) {
        this.src = src;

        this.render = function() {
                return `<img src="${this.src}" />`;
        }
}

HtmlImageElement.prototype = new HtmlElement();
HtmlImageElement.prototype.constructor = HtmlImageElement;