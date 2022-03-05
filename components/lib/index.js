import DemoCard from "./DemoCard";

const component = {
    DemoCard
}

const install = function (Vue) {
    if (install.installed) return
    Object.keys(component).forEach(key => {
        Vue.component(component[key].name, component[key])
    })
}

const API = {
    install
}

export default API