# API Integration Guide for Healthcare Dashboard

## Overview

This guide shows you how to integrate your backend API with the healthcare dashboard.

## Setup

### 1. Install Dependencies

```bash
npm install
```

The dashboard uses **Axios** for HTTP requests. All API calls are centralized in `src/services/api.js`.

### 2. Configure API URL

Create a `.env` file in your project root (copy from `.env.example`):

```env
REACT_APP_API_URL=http://localhost:5000/api
REACT_APP_AUTH_TOKEN_KEY=authToken
```

### 3. Backend Requirements

Your backend should have these endpoints:

## API Endpoints Required

### **Patients**
```
GET    /api/patients                    # Get all patients (paginated)
GET    /api/patients/:id                # Get patient by ID
GET    /api/patients/search?q=term      # Search patients
POST   /api/patients                    # Create new patient
PUT    /api/patients/:id                # Update patient
DELETE /api/patients/:id                # Delete patient
GET    /api/patients/stats              # Get patient statistics
```

### **Appointments**
```
GET    /api/appointments                # Get all appointments
GET    /api/appointments/date?date=...  # Get appointments by date
POST   /api/appointments                # Create appointment
PUT    /api/appointments/:id            # Update appointment
PUT    /api/appointments/:id/cancel     # Cancel appointment
GET    /api/appointments/stats          # Get appointment statistics
```

### **Medical Records**
```
GET    /api/medical-records             # Get all records
GET    /api/medical-records/patient/:id # Get patient's records
POST   /api/medical-records/patient/:id # Upload new record
GET    /api/medical-records/:id/download # Download record
DELETE /api/medical-records/:id         # Delete record
```

### **Staff**
```
GET    /api/staff                       # Get all staff
GET    /api/staff/department/:dept      # Get staff by department
POST   /api/staff                       # Add staff member
PUT    /api/staff/:id                   # Update staff
DELETE /api/staff/:id                   # Delete staff
```

### **Analytics**
```
GET    /api/analytics/dashboard         # Get dashboard statistics
GET    /api/analytics/patient-trends    # Get patient trends
GET    /api/analytics/appointments      # Get appointment analytics
GET    /api/analytics/revenue           # Get revenue data
GET    /api/analytics/departments       # Get department statistics
```

## Response Format

Your API should return responses in this format:

### Success Response (200)
```json
{
  "success": true,
  "data": { /* data here */ },
  "message": "Operation successful"
}
```

### Patient List Response
```json
{
  "success": true,
  "patients": [
    {
      "id": 1,
      "name": "John Doe",
      "email": "john@example.com",
      "phone": "123-456-7890",
      "age": 45,
      "gender": "Male",
      "address": "123 Main St",
      "joinDate": "2024-01-15"
    }
  ],
  "total": 100,
  "page": 1,
  "limit": 10
}
```

### Error Response (400/500)
```json
{
  "success": false,
  "error": "Error message here",
  "code": "ERROR_CODE"
}
```

## Using the API Services

### Example: Fetch Patients

```javascript
import { patientAPI } from '../services/api';

// In your component
const [patients, setPatients] = useState([]);
const [loading, setLoading] = useState(true);

useEffect(() => {
  const fetchPatients = async () => {
    try {
      const data = await patientAPI.getAllPatients(1, 10);
      setPatients(data.patients);
    } catch (error) {
      console.error('Error:', error.message);
    } finally {
      setLoading(false);
    }
  };

  fetchPatients();
}, []);
```

### Example: Create Patient

```javascript
const handleCreatePatient = async (patientData) => {
  try {
    const newPatient = await patientAPI.createPatient({
      name: 'John Doe',
      email: 'john@example.com',
      phone: '123-456-7890',
      age: 45,
      gender: 'Male',
      address: '123 Main St'
    });
    
    console.log('Patient created:', newPatient);
    // Refresh patients list
    fetchPatients();
  } catch (error) {
    console.error('Error creating patient:', error);
  }
};
```

### Example: Search Patients

```javascript
const handleSearch = async (searchTerm) => {
  if (searchTerm.trim()) {
    try {
      const results = await patientAPI.searchPatients(searchTerm);
      setPatients(results.patients);
    } catch (error) {
      console.error('Error:', error);
    }
  }
};
```

### Example: Delete Patient

```javascript
const handleDeletePatient = async (patientId) => {
  if (window.confirm('Are you sure?')) {
    try {
      await patientAPI.deletePatient(patientId);
      setPatients(patients.filter(p => p.id !== patientId));
    } catch (error) {
      console.error('Error deleting patient:', error);
    }
  }
};
```

### Example: Upload Medical Record

```javascript
const handleUploadRecord = async (patientId, file) => {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('recordType', 'Lab Results');
  formData.append('date', new Date().toISOString());

  try {
    const result = await medicalRecordsAPI.uploadRecord(patientId, formData);
    console.log('Record uploaded:', result);
  } catch (error) {
    console.error('Error uploading record:', error);
  }
};
```

## Authentication

The dashboard supports JWT token-based authentication:

```javascript
// Login and save token
const token = 'your-jwt-token-here';
localStorage.setItem('authToken', token);

// Token is automatically added to all requests:
// Authorization: Bearer {token}

// Logout
localStorage.removeItem('authToken');
```

## Error Handling

All API calls include error handling with fallback to mock data:

```javascript
try {
  const data = await patientAPI.getAllPatients();
  setPatients(data);
} catch (error) {
  console.error('Error:', error.message);
  // Falls back to mock data or shows error message
  setError(error.message);
}
```

## CORS Configuration

Ensure your backend has CORS enabled:

```javascript
// Node.js/Express example
const cors = require('cors');
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));
```

## Testing Without Backend

The dashboard includes fallback mock data, so it works without a backend. Once your API is ready, just update the `REACT_APP_API_URL` environment variable and the dashboard will use real data.

## Troubleshooting

### API calls not working?

1. Check if backend is running on the correct port
2. Verify `REACT_APP_API_URL` in `.env` matches your backend
3. Check browser console for CORS errors
4. Verify authentication token if required

### 401 Unauthorized error?

- Token may be expired
- Check token in localStorage
- Re-authenticate if needed

### 404 Not Found?

- Endpoint may not exist
- Check endpoint URL spelling
- Verify backend API structure

## Next Steps

1. Set up your backend API with the endpoints above
2. Update `.env` with your API URL
3. Test each page and verify data is loading
4. Add real authentication flow
5. Deploy to production

---

Need help? Check the API service files in `src/services/` for detailed implementations.
