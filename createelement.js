console.time("createElement");
function createElement(element, attribute, value, parentselector, ...children) {
  if (typeof element === "string") {
    // new element variable creates a new element with the name which we are getting from createElement parameters
    const newelement = document.createElement(element.toLowerCase());
    if (
      parentselector &&
      typeof parentselector === "string" &&
      (parentselector.charAt(0) === "." || parentselector.charAt(0) === "#")
    ) {
      if (document.querySelector(parentselector)) {
        document.querySelector(parentselector).appendChild(newelement);
      } else {
        console.error(
          "Error!!! Invaild parent tag id or class or parent tag not exists"
        );
      }
      console.log("success");
    } else {
      console.error("Parent element not declared");
    }
    if (attribute && typeof attribute === "object") {
      Object.keys(attribute).forEach((key) => {
        if (key.toLowerCase() === "style") {
          if (typeof attribute[key] === "object") {
            Object.keys(attribute[key]).forEach((attr) => {
              newelement.style[attr] = attribute[key][attr];
            });
          }
        } else if (key.toLowerCase() === "classname") {
          if (typeof key === "string") {
            newelement.classList.add(attribute[key]);
          } else {
            console.error("Invaild ClassName");
          }
        }
      });
    }
    if (value && typeof value === "string") {
        newelement.innerHTML = value;
    }
  }
}

console.timeEnd("createElement");

createElement("h1",{className: "test",style: {color: "black",},}, "<h2>1</h2>","#root");
