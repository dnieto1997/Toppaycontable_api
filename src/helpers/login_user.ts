export const LoginSiigo = async () => {

    return new Promise((resolve, reject) => {
        interface AuthRequest {
            username: string;
            access_key: string;
        }

        const authRequest: AuthRequest = {
            username: process.env.USUARIO,
            access_key: process.env.ACCESSKEY,
        };
        const url = `${process.env.URL}${"auth"}`

        const requestOptions: RequestInit = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(authRequest),
            redirect: 'follow'
        };

        fetch(url, requestOptions)
            .then(response => response.text())
            .then((result) => {
                resolve(result);
            })
            .catch(error => {
                console.log(error)
                resolve(error);
            });


    });

}