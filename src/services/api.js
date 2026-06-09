import axiosInstance from './axiosConfig';

// PATIENT ENDPOINTS
export const patientAPI = {
  // Get all patients
  getAllPatients: async (page = 1, limit = 10) => {
    try {
      const response = await axiosInstance.get('/patients', {
        params: { page, limit },
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching patients:', error);
      throw error;
    }
  },

  // Get single patient by ID
  getPatientById: async (id) => {
    try {
      const response = await axiosInstance.get(`/patients/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching patient:', error);
      throw error;
    }
  },

  // Search patients
  searchPatients: async (searchTerm) => {
    try {
      const response = await axiosInstance.get('/patients/search', {
        params: { q: searchTerm },
      });
      return response.data;
    } catch (error) {
      console.error('Error searching patients:', error);
      throw error;
    }
  },

  // Create new patient
  createPatient: async (patientData) => {
    try {
      const response = await axiosInstance.post('/patients', patientData);
      return response.data;
    } catch (error) {
      console.error('Error creating patient:', error);
      throw error;
    }
  },

  // Update patient
  updatePatient: async (id, patientData) => {
    try {
      const response = await axiosInstance.put(`/patients/${id}`, patientData);
      return response.data;
    } catch (error) {
      console.error('Error updating patient:', error);
      throw error;
    }
  },

  // Delete patient
  deletePatient: async (id) => {
    try {
      const response = await axiosInstance.delete(`/patients/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error deleting patient:', error);
      throw error;
    }
  },

  // Get patient statistics
  getPatientStats: async () => {
    try {
      const response = await axiosInstance.get('/patients/stats');
      return response.data;
    } catch (error) {
      console.error('Error fetching patient stats:', error);
      throw error;
    }
  },
};

// APPOINTMENT ENDPOINTS
export const appointmentAPI = {
  // Get all appointments
  getAllAppointments: async (page = 1, limit = 10) => {
    try {
      const response = await axiosInstance.get('/appointments', {
        params: { page, limit },
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching appointments:', error);
      throw error;
    }
  },

  // Get appointments by date
  getAppointmentsByDate: async (date) => {
    try {
      const response = await axiosInstance.get('/appointments/date', {
        params: { date },
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching appointments by date:', error);
      throw error;
    }
  },

  // Create appointment
  createAppointment: async (appointmentData) => {
    try {
      const response = await axiosInstance.post('/appointments', appointmentData);
      return response.data;
    } catch (error) {
      console.error('Error creating appointment:', error);
      throw error;
    }
  },

  // Update appointment
  updateAppointment: async (id, appointmentData) => {
    try {
      const response = await axiosInstance.put(`/appointments/${id}`, appointmentData);
      return response.data;
    } catch (error) {
      console.error('Error updating appointment:', error);
      throw error;
    }
  },

  // Cancel appointment
  cancelAppointment: async (id) => {
    try {
      const response = await axiosInstance.put(`/appointments/${id}/cancel`);
      return response.data;
    } catch (error) {
      console.error('Error cancelling appointment:', error);
      throw error;
    }
  },

  // Get appointment statistics
  getAppointmentStats: async () => {
    try {
      const response = await axiosInstance.get('/appointments/stats');
      return response.data;
    } catch (error) {
      console.error('Error fetching appointment stats:', error);
      throw error;
    }
  },
};

// MEDICAL RECORDS ENDPOINTS
export const medicalRecordsAPI = {
  // Get all records
  getAllRecords: async (page = 1, limit = 10) => {
    try {
      const response = await axiosInstance.get('/medical-records', {
        params: { page, limit },
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching records:', error);
      throw error;
    }
  },

  // Get records by patient ID
  getRecordsByPatientId: async (patientId) => {
    try {
      const response = await axiosInstance.get(`/medical-records/patient/${patientId}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching patient records:', error);
      throw error;
    }
  },

  // Upload medical record
  uploadRecord: async (patientId, formData) => {
    try {
      const response = await axiosInstance.post(
        `/medical-records/patient/${patientId}`,
        formData,
        {
          headers: { 'Content-Type': 'multipart/form-data' },
        }
      );
      return response.data;
    } catch (error) {
      console.error('Error uploading record:', error);
      throw error;
    }
  },

  // Download record
  downloadRecord: async (recordId) => {
    try {
      const response = await axiosInstance.get(`/medical-records/${recordId}/download`, {
        responseType: 'blob',
      });
      return response.data;
    } catch (error) {
      console.error('Error downloading record:', error);
      throw error;
    }
  },

  // Delete record
  deleteRecord: async (recordId) => {
    try {
      const response = await axiosInstance.delete(`/medical-records/${recordId}`);
      return response.data;
    } catch (error) {
      console.error('Error deleting record:', error);
      throw error;
    }
  },
};

// STAFF ENDPOINTS
export const staffAPI = {
  // Get all staff
  getAllStaff: async (page = 1, limit = 10) => {
    try {
      const response = await axiosInstance.get('/staff', {
        params: { page, limit },
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching staff:', error);
      throw error;
    }
  },

  // Get staff by department
  getStaffByDepartment: async (department) => {
    try {
      const response = await axiosInstance.get(`/staff/department/${department}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching staff by department:', error);
      throw error;
    }
  },

  // Add staff member
  addStaff: async (staffData) => {
    try {
      const response = await axiosInstance.post('/staff', staffData);
      return response.data;
    } catch (error) {
      console.error('Error adding staff:', error);
      throw error;
    }
  },

  // Update staff
  updateStaff: async (id, staffData) => {
    try {
      const response = await axiosInstance.put(`/staff/${id}`, staffData);
      return response.data;
    } catch (error) {
      console.error('Error updating staff:', error);
      throw error;
    }
  },

  // Delete staff
  deleteStaff: async (id) => {
    try {
      const response = await axiosInstance.delete(`/staff/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error deleting staff:', error);
      throw error;
    }
  },
};

// ANALYTICS ENDPOINTS
export const analyticsAPI = {
  // Get dashboard statistics
  getDashboardStats: async () => {
    try {
      const response = await axiosInstance.get('/analytics/dashboard');
      return response.data;
    } catch (error) {
      console.error('Error fetching dashboard stats:', error);
      throw error;
    }
  },

  // Get patient trends
  getPatientTrends: async (startDate, endDate) => {
    try {
      const response = await axiosInstance.get('/analytics/patient-trends', {
        params: { startDate, endDate },
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching patient trends:', error);
      throw error;
    }
  },

  // Get appointment analytics
  getAppointmentAnalytics: async (startDate, endDate) => {
    try {
      const response = await axiosInstance.get('/analytics/appointments', {
        params: { startDate, endDate },
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching appointment analytics:', error);
      throw error;
    }
  },

  // Get revenue analytics
  getRevenueAnalytics: async (startDate, endDate) => {
    try {
      const response = await axiosInstance.get('/analytics/revenue', {
        params: { startDate, endDate },
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching revenue analytics:', error);
      throw error;
    }
  },

  // Get department statistics
  getDepartmentStats: async () => {
    try {
      const response = await axiosInstance.get('/analytics/departments');
      return response.data;
    } catch (error) {
      console.error('Error fetching department stats:', error);
      throw error;
    }
  },
};
