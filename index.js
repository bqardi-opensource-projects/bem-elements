function bem(tag, identifier, elementSeparator = "__", modifierSeparator = "--"){
    if (!tag) {
        tag = "div";
    }
    var htmlElement = document.createElement(tag);
    htmlElement.className = identifier;
    var block = {
        identifier,
        identifiers: [],
        elementSeparator,
        modifierSeparator
    }
    return bemObj(htmlElement, block, identifier);

    function bemObj(htmlElement, block, identifier){
        block.identifiers.push(identifier);
        return {
            htmlElement,
            identifier,
            block,
            addElement(tag, identifier, content = ""){
                var idStr = this.block.identifier + this.block.elementSeparator + identifier;
                if (this.block.identifiers.find(id => id == idStr)) {
                    console.error(`BLOCK "${this.block.name}" already contains an ELEMENT named "${idStr}"!\nCan't create HTML element <${tag} class="${idStr}">${content}</${tag}>`);
                    return;
                }
                if (!tag) {
                    tag = "div";
                }
                var htmlElement = document.createElement(tag);
                htmlElement.className = idStr;
                if (content) {
                    htmlElement.innerHTML = content;
                }
                this.htmlElement.appendChild(htmlElement);
                return bemObj(htmlElement, this.block, idStr);
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