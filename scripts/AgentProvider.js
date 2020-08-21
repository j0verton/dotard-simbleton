import {createBusinessArray} from "./BusinessProvider";
businessArray = createBusinessArray()

export const agentNames = businessArray.map(object => {
    return `${object.purchasingAgent.nameFirst} ${object.purchasingAgent.nameLast}`
})