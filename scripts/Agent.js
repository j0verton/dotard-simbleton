export const createAgentHTML = (agent) => {
return `
    <section class="agent">
            <h2 class="agent-name">${agent.fullName}</h2>
            <div class="agent-info">
            <h3 class="agent-company">${agent.company}</h3>
            <h4 class="agent"-phone>${agent.phoneNumber}</h3>
            </div>
        </section>
        `
}