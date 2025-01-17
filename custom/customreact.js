function customRender(reactElement, container) {
  /*
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML(reactElement.content)
    domElement.setAttribute('href' , reactElement.attributes.href)
    domElement.setAttribute("target", reactElement.attributes.target)
    container.appendChild(domElement)
    */
  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML =  reactElement.content;
  for (const attribute in reactElement.attributes) {
    domElement.setAttribute(attribute, reactElement.attributes[attribute]);
  }
  container.appendChild(domElement);
}
const reactElement = {
    type: "a",
    attributes: {
    href: "https://google.com",
    target: "_blank",
    },
    content: 'Click on me to visit google',
}
const mainContainer = document.getElementById("root")

customRender(reactElement, mainContainer)
