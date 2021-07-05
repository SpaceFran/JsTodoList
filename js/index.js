import Model from "./model.js";
import View from "./view.js";
import LocalStorage from "./localstorage.js";

document.addEventListener('DOMContentLoaded', () => {

    const model = new Model();
    const view = new View();
    const saveLocalStorage = new LocalStorage();

    //Connecting View and Model
    model.setView(view);
    view.setModel(model);

    //Connecting LocalStorage and Model
    saveLocalStorage.getModel(model);
    model.getLocalStorage(saveLocalStorage);

    //Connecting LocalStorage and View
    saveLocalStorage.getView(view);
    view.getLocalStorage(saveLocalStorage);

    view.render();

})