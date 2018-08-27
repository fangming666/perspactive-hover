function PerspactiveHover(obj) {
    this.fatherDom = obj.fatherDom;
    this.childDom = obj.childDom;
    this._x = 0;
    this._y = 0;
    this.x = 0;
    this.y = 0
}

PerspactiveHover.prototype.onMouseEnterHandler = function () {
    var self = this;
    this.fatherDom.onmouseenter = function (event) {
        self.update(event)
    }
};
PerspactiveHover.prototype.onMouseLeaveHandler = function () {
    var self = this;
    this.fatherDom.onmouseleave = function () {
        self.setTransform("");
    }
};
PerspactiveHover.prototype.onMouseMoveHandler = function () {
    var self = this;
    this.fatherDom.onmousemove = function (event) {
        self.update(event)
    }
};
PerspactiveHover.prototype.updatePosition = function (event) {
    var e = event || window.event;
    this.x = e.clientX - this._x;
    this.y = (e.clientY - this._y) * -1;
};
PerspactiveHover.prototype.setOrigin = function (e) {
    this._x = e.offsetLeft + Math.floor(e.offsetWidth / 2);
    this._y = e.offsetTop + Math.floor(e.offsetHeight / 2);
};
PerspactiveHover.prototype.updateTransformStyle = function (x, y) {
    this.setOrigin(this.fatherDom);
    var style = "rotateX(" + x + "deg) rotateY(" + y + "deg)";
    this.setTransform(style);
};
PerspactiveHover.prototype.setTransform = function (style) {
    this.childDom.style.transform = style;
    this.childDom.style.webkitTransform = style;
    this.childDom.style.mozTransform = style;
    this.childDom.style.msTransform = style;
    this.childDom.style.oTransform = style;
}
PerspactiveHover.prototype.update = function (event) {
    this.updatePosition(event);
    this.updateTransformStyle(
        (this.y / this.childDom.offsetHeight / 2).toFixed(2),
        (this.x / this.childDom.offsetWidth / 2).toFixed(2)
    );
};
