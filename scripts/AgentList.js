import { agentNames } from "./BusinessProvider.js";
import { createAgentHTML } from "./Agent.js";


export const createAgentList = () => {
    const contentTarget = document.querySelector('.agents')
    const agentArray = agentNames
    console.log(agentArray)
    contentTarget.innerHTML = "<h1>Purchasing Agents</h1>"

    agentArray.forEach(
        (agentObject) => {
            contentTarget.innerHTML += createAgentHTML(agentObject);
        }
    );
}