import Model from "./model.js";
import View from "./view.js";
import LocalStorage from "./localstorage.js";

document.addEventListener('DOMContentLoaded', () => {

    const model = new Model();
    const view = new View();

    //Connecting View and Model
    model.setView(view);
    view.setModel(model);

    //Connecting LocalStorage and Model
    const saveLocalStorage = new LocalStorage();
    saveLocalStorage.getModel(model);
    model.getLocalStorage(saveLocalStorage);

    view.render();

})