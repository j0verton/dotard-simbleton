import createBusinessArray from './BusinessProvider.js'
import businessHTMLGenerator from './Business.js'

const contentTarget = document.querySelector('.buisinesses')

const createBusinessList = () => {
    const businessArray = createBusinessArray();
    contentTarget.innerHTML = "<h1>Art Supplies</h1>"

    businessArray.forEach(
        (businessObject) => {
            contentTarget.innerHTML += businessHTMLGenerator(businessObject);
        }
    );
}