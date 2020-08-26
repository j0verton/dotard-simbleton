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

const companySearchResultArticle = document.querySelector(".foundCompanies")

document
    .querySelector("#companySearch")
    .addEventListener("keypress", keyPressEvent => {
        if (keyPressEvent.charCode === 13) {
            /*
                When user presses enter, find the matching business.
                You can use the `.includes()` method strings to
                see if a smaller string is part of a larger string.

                Example:
                    business.companyName.includes(keyPressEvent.target.value)
            */
           const businessArrayCopy = createBusinessArray();
    const findBusiness = (input) => {
        return businessArrayCopy.find(business => business.companyName.includes(input))
    }
            const inputField = document.getElementById("companySearch")
            const userInput = inputField.value
            let foundBusiness = findBusiness(userInput)
                      
            //makes other lists disappear when a search is run.
            if(foundBusiness) {
                let hideTargets = document.querySelector(".lists");
                hideTargets.style.display = "none";
            }
            companySearchResultArticle.innerHTML = `
                <h1>SEARCH RESULTS</h1>
                <h2>
                ${foundBusiness.companyName}
                </h2>
                <section>
                ${foundBusiness.addressFullStreet}
                </section>
                
                <section>
                ${foundBusiness.addressCity},
                ${foundBusiness.addressStateCode}
                ${foundBusiness.addressZipCode}
                </section>
            `;
        }
    });