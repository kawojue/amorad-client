import axios from "@/utils/axiosConfig";

const getAnalytics = async (token) => {
    const response = await axios.get(`center/analytics`, {
        headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
};

const getChart = async (token, payload) => {
    const response = await axios.get(`center/charts?q=${payload}`, {
        headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
};

// PATIENTS

const getPatients = async (token, query) => {
    const response = await axios.get('/center/patients', {
        params: query,
        headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
};

const getPatient = async (id, token) => {
    const response = await axios.get(`/center/patient/${id}/fetch`, {
        headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
};

const addPatient = async (payload, token) => {
    const response = await axios.post("/center/patient", payload, {
        headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
};

const updatePatient = async (id, payload, token) => {
    const response = await axios.put(`/center/patient/${id}/edit`, payload, {
        headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
};

// PATIENT STUDIES
// const uploadPatientStudy = async (id, payload, token) => {
//     const response = await axios.post(`/center/patient/${id}/study`, payload, {
//         headers: { Authorization: `Bearer ${token}` },
//         'Content-Type': 'multipart/form-data'
//     });
//     return response.data;
// };

const uploadPatientStudy = async (id, payload, token) => {
    try {
        const response = await fetch(`https://amorad.onrender.com/center/patient/${id}/study`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                // 'Content-Type': 'multipart/form-data' // Do not set this header manually
            },
            body: payload // FormData object is set directly as the body
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Something went wrong');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error uploading patient study:', error);
        throw error;
    }
};

const updatePatientStudy = async (mrn, studyId, payload, token) => {
    const response = await axios.put(`/center/patient/${mrn}/study/${studyId}/edit`, payload, {
        headers: { 
            Authorization: `Bearer ${token}` ,
        }
    });
    return response.data;
};

const designateStudy = async (mrn, studyId, practitionerId, token) => {
    const response = await axios.patch(`/center/patient/${mrn}/study/${studyId}/${practitionerId}/designate`, {}, {
        headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
};

const getPatientStudy = async (mrn, studyId, token) => {
    const response = await axios.get(`/center/patient/${mrn}/study/${studyId}`, {
        headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
};

// REPORTS
const getReports = async (token, query) => {
    const response = await axios.get('/center/reports', {
        params: query,
        headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
};

const getReport = async (id, token) => {
    const response = await axios.get(`/center/report/${id}/fetch`, {
        headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
};

// STAFFS
const getStaffs = async (token, query) => {
    const response = await axios.get('/center/fetch/staffs', {
        params: query,
        headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
};

const toggleStaff = async (payload, token) => {
    const response = await axios.patch(`/center/manage/suspension/${payload?.id}?action=${payload?.status}`, {}, {
        headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
};

const addPractitioner = async (payload, token) => {
    const response = await axios.post('/center/invite/medical-staff', payload, {
        headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
};

const addAdmin = async (payload, token) => {
    const response = await axios.post('/center/invite/center-admin', payload, {
        headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
};

const organizationService = {
    getAnalytics,
    getChart,
    getPatients,
    getPatient,
    addPatient,
    updatePatient,

    // STUDY
    uploadPatientStudy,
    getPatientStudy,
    updatePatientStudy,
    designateStudy,

    // REPORS
    getReports,
    getReport,

    // STAFFS
    getStaffs,
    toggleStaff,
    addPractitioner,
    addAdmin

};

export default organizationService;