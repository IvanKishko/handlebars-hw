import charactersTemplate from "./templates/characterTemplate.handlebars";
import items from "./characters.json";

const layout = charactersTemplate(items);
console.log(layout);

const container = document.getElementById("characters-container");

container.innerHTML = layout;
