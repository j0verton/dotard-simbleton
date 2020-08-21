import {createBusinessArray} from "./BusinessProvider";
businessArray = createBusinessArray()

export const AgentNames = businessArray.map(supplyObject => {
    return supplyObject.brand
})