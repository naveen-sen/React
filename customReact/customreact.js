function customRender(){
    // const domElement = document.createElement
    // (reactElement.type)
    // domElement.innerHTML=reactElement.children
    // domElement.setAttribute('href',reactElement.props.href)
    // domElement.setAttribute('href',reactElement.props.target)

    // container.appendChild(domElement)

    const domElement = document.createElement(reactElement.type);
    
    domElement.innerHTML = reactElement.children;
    
    // Set attributes
    for (const prop in reactElement.props) {
        if (prop === 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop]);
    }
    
    mainContainer.appendChild(domElement);
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://github.com',
        target: '_blank'
    },
    children: 'Click me to visit Github'
}

// Get the root container and render
const mainContainer = document.querySelector('#root');
customRender(reactElement, mainContainer);