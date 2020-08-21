import {createBusinessArray, nyBusinesses, manufacturingBusinesses} from './BusinessProvider.js'
import {businessHTMLGenerator} from './Business.js'



export const createBusinessList = () => {
    const contentTarget = document.querySelector('.businesses')
    const businessArray = createBusinessArray();
    contentTarget.innerHTML = "<h1>Active Businesses</h1>"

    businessArray.forEach(
        (businessObject) => {
            contentTarget.innerHTML += businessHTMLGenerator(businessObject);
        }
    );
}

export const createNYBusinessList = () => {
    const target = document.querySelector(".businessList--newYork");
    const businessArray = nyBusinesses;
    target.innerHTML = "<h1>New York Businesses</h1>"

    businessArray.forEach(
        (businessObject) => {
            target.innerHTML += businessHTMLGenerator(businessObject);
        }
    );
}

export const createManufacturingBusinessList = () => {
    const target = document.querySelector(".businessList--manufacturing");
    const businessArray = manufacturingBusinesses;
    target.innerHTML = "<h1>Manufacturing Businesses</h1>"

    businessArray.forEach(
        (businessObject) => {
            target.innerHTML += businessHTMLGenerator(businessObject);
        }
    );
}