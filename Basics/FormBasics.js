// ==========================
// SHOW FIELD
// ==========================
function showRevenue(executionContext) {
    var formContext = executionContext.getFormContext();

    formContext.getControl("revenue").setVisible(true);
}

// ==========================
// HIDE FIELD
// ==========================
function hideRevenue(executionContext) {
    var formContext = executionContext.getFormContext();

    formContext.getControl("revenue").setVisible(false);
}

// ==========================
// ENABLE FIELD
// ==========================
function enableRevenue(executionContext) {
    var formContext = executionContext.getFormContext();

    formContext.getControl("revenue").setDisabled(false);
}

// ==========================
// DISABLE FIELD
// ==========================
function disableRevenue(executionContext) {
    var formContext = executionContext.getFormContext();

    formContext.getControl("revenue").setDisabled(true);
}

// ==========================
// GET FIELD VALUE
// ==========================
function getRevenue(executionContext) {
    var formContext = executionContext.getFormContext();

    var revenue = formContext.getAttribute("revenue").getValue();

    console.log("Revenue:", revenue);

    return revenue;
}

// ==========================
// SET FIELD VALUE
// ==========================
function setRevenue(executionContext) {
    var formContext = executionContext.getFormContext();

    formContext.getAttribute("revenue").setValue(100000);
}

// ==========================
// REQUIRED FIELD
// ==========================
function makeRequired(executionContext) {
    var formContext = executionContext.getFormContext();

    formContext.getAttribute("revenue")
        .setRequiredLevel("required");
}

// ==========================
// RECOMMENDED FIELD
// ==========================
function makeRecommended(executionContext) {
    var formContext = executionContext.getFormContext();

    formContext.getAttribute("revenue")
        .setRequiredLevel("recommended");
}

// ==========================
// OPTIONAL FIELD
// ==========================
function makeOptional(executionContext) {
    var formContext = executionContext.getFormContext();

    formContext.getAttribute("revenue")
        .setRequiredLevel("none");
}

// ==========================
// SET FOCUS
// ==========================
function focusRevenue(executionContext) {
    var formContext = executionContext.getFormContext();

    formContext.getControl("revenue").setFocus();
}

// ==========================
// GET FIELD LABEL
// ==========================
function getRevenueLabel(executionContext) {
    var formContext = executionContext.getFormContext();

    var label = formContext.getControl("revenue").getLabel();

    console.log("Label:", label);

    return label;
}

// ==========================
// SET FIELD LABEL
// ==========================
function setRevenueLabel(executionContext) {
    var formContext = executionContext.getFormContext();

    formContext.getControl("revenue")
        .setLabel("Annual Revenue");
}

// ==========================
// GET FORM TYPE
// ==========================
function getFormType(executionContext) {
    var formContext = executionContext.getFormContext();

    var formType = formContext.ui.getFormType();

    console.log("Form Type:", formType);

    return formType;
}
