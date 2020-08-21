import {createBusinessArray} from './BusinessProvider.js'
import {businessHTMLGenerator} from './Business.js'

const contentTarget = document.querySelector('.businesses')

export const createBusinessList = () => {
    const businessArray = createBusinessArray();
    contentTarget.innerHTML = "<h1>Active Businesses</h1>"

    businessArray.forEach(
        (businessObject) => {
            contentTarget.innerHTML += businessHTMLGenerator(businessObject);
        }
    );
}