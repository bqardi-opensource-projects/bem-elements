function bem(tag, identifier, elementSeparator = "__", modifierSeparator = "--"){
    var htmlElement = document.createElement(tag);
    htmlElement.className = identifier;
    var block = {
        identifier,
        elementSeparator,
        modifierSeparator
    }
    return bemObj(htmlElement, block, identifier);

    function bemObj(htmlElement, block, identifier){
        return {
            htmlElement,
            identifier,
            block,
            addElement(tag, identifier, content = ""){
                var htmlElement = document.createElement(tag);
                var id = this.block.identifier + this.block.elementSeparator + identifier;
                htmlElement.className = id;
                if (content) {
                    htmlElement.innerHTML = content;
                }
                this.htmlElement.appendChild(htmlElement);
                return bemObj(htmlElement, this.block, id);
            },
            addModifier(value){
                this.htmlElement.classList.add(this.identifier + this.block.modifierSeparator + value);
            },
            removeModifier(value){
                var modifierClass = this.identifier + this.block.modifierSeparator + value;
                if (this.htmlElement.classList.contains(modifierClass)) {
                    this.htmlElement.classList.remove(modifierClass);
                }
            },
            toggleModifier(value){
                this.htmlElement.classList.toggle(this.identifier + this.block.modifierSeparator + value);
            }
        }
    }
}

export default bem;