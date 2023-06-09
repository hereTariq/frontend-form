const baseUrl = 'https://form-backend-production-032c.up.railway.app';
// const baseUrl = 'http://localhost:3500';

const RegisterAPI = `${baseUrl}/user/register`;
const LoginAPI = `${baseUrl}/user/login`;
const CreateFormAPI = `${baseUrl}/form/create`;
const GetUserAPI = `${baseUrl}/user`;
const GetFormAPI = `${baseUrl}/form`;
const CreateResponseFormAPI = `${baseUrl}/response-form/create`;
const GetFormsAPI = `${baseUrl}/form`;
const deleteFormAPI = `${baseUrl}/form`;
const updateFormAPI = `${baseUrl}/form`;
export {
    GetUserAPI,
    RegisterAPI,
    LoginAPI,
    CreateFormAPI,
    GetFormAPI,
    CreateResponseFormAPI,
    GetFormsAPI,
    deleteFormAPI,
    updateFormAPI,
};
