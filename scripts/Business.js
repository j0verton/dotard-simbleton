export const businessHTMLGenerator = (business) => {
    return `
        <section class="business">
            <h2 class="business-name">${business.companyName}</h2>
            <div class="address">
                ${business.addressFullStreet}<br>
                ${business.addressCity}, ${business.addressStateCode} ${business.addressZipCode}
            </div>
        </section>
    `
}