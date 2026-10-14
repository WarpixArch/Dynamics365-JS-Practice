/**
 * Scenario:
 * Show the Revenue field when the Account Name contains a value.
 *
 * Event:
 * OnChange of Account Name
 */

function showRevenue(executionContext) {
    var formContext = executionContext.getFormContext();

    var accountName = formContext.getAttribute("name").getValue();

    if (accountName) {
        formContext.getControl("revenue").setVisible(true);
    }
}
