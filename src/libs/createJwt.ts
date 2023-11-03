import jwt from 'jsonwebtoken';
const createJwt = (payload: any, secretKey: string, expiresIn: string) => {
    if (typeof payload !== 'object' || !payload) {
        throw new Error('Payload must be a non-empty object!')
    }
    if (typeof secretKey !== 'string' || secretKey === "") {
        throw new Error('secretKey must be a non-empty string!')
    }
    try {
        const token = jwt.sign(payload, secretKey, { expiresIn });
        return token;
    } catch (error) {
        console.error('failed to sign the jwt: ', error);
        throw error
    }
};

export default createJwt;