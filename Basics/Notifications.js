// =====================================================
// TOPIC : FORM & FIELD NOTIFICATIONS
//
// INTERVIEW QUESTIONS
//
// Q1. What notification types are available?
//
// Answer:
// INFO
// WARNING
// ERROR
//
// -----------------------------------------------------
//
// Q2. Difference between Form Notification and
// Field Notification?
//
// Form Notification:
// - Appears at the top of the form.
// - Used for form-level messages.
// - Does NOT prevent record save.
// - Uses setFormNotification().
//
// Field Notification:
// - Appears below a specific field.
// - Used for field-level validations.
// - Prevents record save until cleared.
// - Uses setNotification().
//
// -----------------------------------------------------
//
// Q3. Why do we pass a unique Id?
//
// Example:
// "RevenueValidation"
//
// The Id is used later to clear the notification.
//
// Example:
//
// clearFormNotification("WarningMessage");
// clearNotification("RevenueValidation");
//
// -----------------------------------------------------
//
// Q4. Which notification prevents saving the record?
//
// Answer:
// Field Notification
//
// Because the field becomes invalid until
// clearNotification() is called.
//
// -----------------------------------------------------
//
// Q5. Can multiple notifications be displayed?
//
// Answer:
// Yes.
//
// Every notification should have a unique Id.
//
// -----------------------------------------------------
//
// Q6. How do we clear all notifications?
//
// Answer:
// There is no direct method.
//
// We must clear each notification individually
// using its Id.
//
// =====================================================



// =====================================================
// SHOW INFO NOTIFICATION
//
// Purpose:
// Displays an informational message at the
// top of the form.
// =====================================================
function showInfoNotification(executionContext) {

    var formContext = executionContext.getFormContext();

    formContext.ui.setFormNotification(
        "Account is under review.",
        "INFO",
        "InfoMessage"
    );
}



// =====================================================
// SHOW WARNING NOTIFICATION
//
// Purpose:
// Displays a warning message at the
// top of the form.
// =====================================================
function showWarningNotification(executionContext) {

    var formContext = executionContext.getFormContext();

    formContext.ui.setFormNotification(
        "Revenue is lower than expected.",
        "WARNING",
        "WarningMessage"
    );
}



// =====================================================
// SHOW ERROR NOTIFICATION
//
// Purpose:
// Displays an error message at the
// top of the form.
//
// Important:
// User can still save the record.
// =====================================================
function showErrorNotification(executionContext) {

    var formContext = executionContext.getFormContext();

    formContext.ui.setFormNotification(
        "Approval Status is required.",
        "ERROR",
        "ErrorMessage"
    );
}



// =====================================================
// CLEAR INFO NOTIFICATION
// =====================================================
function clearInfoNotification(executionContext) {

    var formContext = executionContext.getFormContext();

    formContext.ui.clearFormNotification(
        "InfoMessage"
    );
}



// =====================================================
// CLEAR WARNING NOTIFICATION
// =====================================================
function clearWarningNotification(executionContext) {

    var formContext = executionContext.getFormContext();

    formContext.ui.clearFormNotification(
        "WarningMessage"
    );
}



// =====================================================
// CLEAR ERROR NOTIFICATION
// =====================================================
function clearErrorNotification(executionContext) {

    var formContext = executionContext.getFormContext();

    formContext.ui.clearFormNotification(
        "ErrorMessage"
    );
}



// =====================================================
// SET FIELD NOTIFICATION
//
// Purpose:
// Displays validation message below field.
//
// Important:
// Record cannot be saved until notification
// is cleared.
// =====================================================
function setRevenueFieldNotification(executionContext) {

    var formContext = executionContext.getFormContext();

    formContext.getControl("revenue")
        .setNotification(
            "Revenue cannot be negative.",
            "RevenueValidation"
        );
}



// =====================================================
// CLEAR FIELD NOTIFICATION
//
// Purpose:
// Removes field validation.
//
// Important:
// Record can be saved again after this.
// =====================================================
function clearRevenueFieldNotification(executionContext) {

    var formContext = executionContext.getFormContext();

    formContext.getControl("revenue")
        .clearNotification(
            "RevenueValidation"
        );
}



// =====================================================
// REAL WORLD SCENARIO
//
// Revenue should not be empty.
//
// If Revenue is empty:
// Show Field Notification
//
// Else:
// Clear Field Notification
// =====================================================
function validateRevenue(executionContext) {

    var formContext = executionContext.getFormContext();

    var revenue =
        formContext.getAttribute("revenue")
            .getValue();

    if (revenue === null) {

        formContext.getControl("revenue")
            .setNotification(
                "Revenue is mandatory.",
                "RevenueValidation"
            );
    }
    else {

        formContext.getControl("revenue")
            .clearNotification(
                "RevenueValidation"
            );
    }
}



// =====================================================
// REAL WORLD SCENARIO
//
// Show Form Notification based on Revenue.
//
// Revenue > 1,000,000
// Display Info Message
// =====================================================
function checkHighRevenue(executionContext) {

    var formContext = executionContext.getFormContext();

    var revenue =
        formContext.getAttribute("revenue")
            .getValue();

    if (revenue !== null && revenue > 1000000) {

        formContext.ui.setFormNotification(
            "High value customer.",
            "INFO",
            "HighRevenue"
        );
    }
    else {

        formContext.ui.clearFormNotification(
            "HighRevenue"
        );
    }
}
