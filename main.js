const ns = "http://www.w3.org/2000/svg";

function createSVGElement(tag, ns, ...args) {
    let e = document.createElementNS(ns, tag);
    for (let i = 0; i < args.length; i++) {
        const [key] = Object.keys(args[i]);
        e.setAttribute(key, args[i][key]);
    }
    return e;
}

let svg = createSVGElement("svg", ns, {width: "500"}, {height: "500"}, {style: "background-color: black"});
svg.append(createSVGElement("circle", ns, {cx: "100"}, {cy: "200"}, {r: "50"}, {style: "fill: white"}));
document.body.append(svg);