import Model from "./model.js";
import View from "./view.js";
import LocalStorage from "./localstorage.js";

document.addEventListener('DOMContentLoaded', () => {

    const model = new Model();
    const view = new View();
    const saveLocalStorage = new LocalStorage();

    model.setView(view);
    view.setModel(model);

    saveLocalStorage.getModel(model);
    model.getLocalStorage(saveLocalStorage);

})