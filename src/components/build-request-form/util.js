
export const verifyCaptcha = async ({ token, verifyCaptchaEndpoint }) => {
    const response = await fetch(verifyCaptchaEndpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            token: token,
        }),
    });
    return response.json();
};

export const sendEmail = async ({ sendEmailEndpoint, projectDescription, email, name }) => {
    const response = await fetch(sendEmailEndpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            subject: `austinjhunt.com - Build Request from ${email}`,
            body: projectDescription,
            from_email: email,
            from_name: name,
            recipient: 'austincodescleanly@gmail.com'
        }),
    });
    return response.json();
};