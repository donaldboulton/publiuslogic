function getUserRoles(context) {
    const { clientContext } = context
    const userRoles = clientContext.user
      ? clientContext.user.app_metadata.roles
      : ["guest"]
}

export async function handle(event, context) {
    const userRoles = getUserRoles(context)

    // Return with 401 if user is not logged in
    if (userRoles.includes("guest")) {
        return {
            statusCode: 401,
            body: "unauthorized"
        }
    }

    let data;

    // Get data only admins should see
    if (userRoles.includes("admin")) {
        data = getAllStatuses();
    }

    // Get data only owners should see
    else if (userRoles.includes("owner")) {
        data = getStatus();
    }

    return {
        statusCode: 200,
        body: JSON.stringify({
            data,
        })
    }