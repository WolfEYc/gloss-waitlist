export const sign_in = async (email: string, password: string) => 
{
    const res = await fetch('https://api-production-v2.herokuapp.com/v2/auth/sign_in', 
    {
        method: 'POST',
        headers:
        {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: email, password: password }) 
    });

    if(!res.ok)
    {
        throw new Error('Signin Failed!')
    }

    return res.json();
}
