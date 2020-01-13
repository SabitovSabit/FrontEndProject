
let dom = {
    createElement: function (tagName, className, cssProps, location) {
        //create dom element
        let element = document.createElement(tagName);
        //check if this element is valid html element
        if (element != null) {
            //if so, then validate classname existance
            if (this._isValidValue(className)) {
                element.className = className;
            }
            //enumerate all css properties given as  object
            for (let f in cssProps) {
                //check if object key is valid attribute
                if (this._isValidAttr(f)) {
                    //then use it as attribute
                    element[f] = cssProps[f];
                }
                //otherwise,it is just style.Use it as style..
                else {
                    element.style[f] = cssProps[f];
                }
            }
        }
        location.appendChild(element);
        return element;
    },
    _isValidValue: function (val) {
        return (typeof (val) !== "undefined" && val)
    },
    _isValidAttr: function (attr) {
        return (attr == 'src' || attr == 'href' || attr == 'innerText' || attr == 'id');
    }
}

document.addEventListener("DOMContentLoaded",function(){
    let add=document.querySelectorAll(".addtocard");
    let shop=document.getElementsByClassName("shop")[0];
    let shopitems=document.getElementsByClassName("shop-items")[0];
    for(let f of add){
      console.log(f);
      f.addEventListener("click",function(){
             let addshop=dom.createElement("div","shopitem",{"width":"100%","height":"100px","background-color":"red"},shopitems);
             let img=dom.createElement("img","img",{"src":"img/item-02.jpg"},addshop);
      });
    
    }
})
