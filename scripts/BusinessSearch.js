import { createBusinessArray } from "./BusinessProvider.js"
const businessArrayCopy = createBusinessArray();

export const findBusiness = (input) => {
    return businessArrayCopy.find(business => business.companyName == input)
};

