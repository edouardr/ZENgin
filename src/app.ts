import * as Core from "./_core";
import * as Systems from "./_systems";

let factory: Systems.ObjectFactory = new Systems.ObjectFactory();

let entity = factory.create(window, "Core.Entity", {}) as Core.Entity;
console.log(entity.func(5));

export = { Core, Systems }