// =====================================================
// SHOW FIELD
// Purpose:
// Makes a field visible on the form.
//
// Example:
// Show Revenue when Account Type = Customer
// =====================================================
function showRevenue(executionContext) {
    var formContext = executionContext.getFormContext();

    formContext.getControl("revenue").setVisible(true);
}

// =====================================================
// HIDE FIELD
// Purpose:
// Hides a field from the form.
//
// Example:
// Hide Revenue when Account Type = Prospect
// =====================================================
function hideRevenue(executionContext) {
    var formContext = executionContext.getFormContext();

    formContext.getControl("revenue").setVisible(false);
}

// =====================================================
// ENABLE FIELD
// Purpose:
// Allows users to edit the field.
// =====================================================
function enableRevenue(executionContext) {
    var formContext = executionContext.getFormContext();

    formContext.getControl("revenue").setDisabled(false);
}

// =====================================================
// DISABLE FIELD
// Purpose:
// Makes a field read-only.
// Field remains visible but cannot be edited.
// =====================================================
function disableRevenue(executionContext) {
    var formContext = executionContext.getFormContext();

    formContext.getControl("revenue").setDisabled(true);
}

// =====================================================
// GET FIELD VALUE
// Purpose:
// Reads the current value from a field.
// =====================================================
function getRevenue(executionContext) {
    var formContext = executionContext.getFormContext();

    var revenue =
        formContext.getAttribute("revenue").getValue();

    console.log(revenue);

    return revenue;
}

// =====================================================
// SET FIELD VALUE
// Purpose:
// Updates the value of a field.
// =====================================================
function setRevenue(executionContext) {
    var formContext = executionContext.getFormContext();

    formContext.getAttribute("revenue").setValue(100000);
}

// =====================================================
// CLEAR FIELD VALUE
// Purpose:
// Removes existing value from the field.
// =====================================================
function clearRevenue(executionContext) {
    var formContext = executionContext.getFormContext();

    formContext.getAttribute("revenue").setValue(null);
}

// =====================================================
// REQUIRED LEVEL - REQUIRED
// Purpose:
// User must provide a value before saving.
//
// Interview Question:
// What are the available requirement levels?
//
// Answer:
// required
// recommended
// none
// =====================================================
function makeRequired(executionContext) {
    var formContext = executionContext.getFormContext();

    formContext
        .getAttribute("revenue")
        .setRequiredLevel("required");
}

// =====================================================
// REQUIRED LEVEL - RECOMMENDED
// Purpose:
// Shows blue '+' icon but user can still save.
// =====================================================
function makeRecommended(executionContext) {
    var formContext = executionContext.getFormContext();

    formContext
        .getAttribute("revenue")
        .setRequiredLevel("recommended");
}

// =====================================================
// REQUIRED LEVEL - OPTIONAL
// Purpose:
// Removes any requirement.
// =====================================================
function makeOptional(executionContext) {
    var formContext = executionContext.getFormContext();

    formContext
        .getAttribute("revenue")
        .setRequiredLevel("none");
}

// =====================================================
// SET FOCUS
// Purpose:
// Places cursor on the field.
// Useful during validations.
// =====================================================
function focusRevenue(executionContext) {
    var formContext = executionContext.getFormContext();

    formContext.getControl("revenue").setFocus();
}

// ==========================================
