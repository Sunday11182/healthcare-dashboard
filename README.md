# Healthcare System Dashboard

A comprehensive React-based healthcare system dashboard with multiple management sections for hospitals and clinics.

## Features

### 1. **Dashboard**
- Quick overview with key statistics (Total Patients, Appointments, Records, Revenue)
- Weekly activity chart showing patient trends
- Real-time alerts and notifications
- Recent patients table

### 2. **Patient Management**
- View all patients with detailed information
- Search and filter capabilities
- Add new patients
- Edit/Delete patient records

### 3. **Appointments**
- Schedule and manage appointments
- View appointment status (Confirmed, Pending, Cancelled)
- Reschedule appointments
- Calendar integration ready

### 4. **Medical Records**
- Store and organize patient medical records
- Upload lab results, X-rays, blood tests
- Download records
- Track record status

### 5. **Staff Management**
- Manage hospital staff and doctors
- View staff information and contact details
- Track staff status (Active, On Leave)
- Add/Remove staff members

### 6. **Analytics & Reports**
- Patient statistics by department
- Revenue tracking and forecasting
- Appointment completion rates
- Patient satisfaction metrics

## Tech Stack

- **Frontend**: React 18
- **Routing**: React Router v6
- **Charts**: Chart.js & react-chartjs-2
- **Icons**: Lucide React
- **Styling**: CSS3 with modern design patterns
- **HTTP Client**: Axios (ready for API integration)
- **Date Utilities**: date-fns

## Project Structure

```
src/
├── components/
│   ├── Sidebar.js          # Navigation sidebar
│   ├── Header.js           # Page header
│   ├── StatCard.js         # Statistics card component
│   ├── DashboardChart.js   # Charts component
│   └── RecentPatients.js   # Patients table
├── pages/
│   ├── Dashboard.js        # Main dashboard
│   ├── PatientManagement.js
│   ├── Appointments.js
│   ├── MedicalRecords.js
│   ├── StaffManagement.js
│   └── Analytics.js
├── App.js                  # Main app component
└── index.js                # Entry point
```

## Installation

1. Clone the repository
```bash
git clone https://github.com/Sunday11182/healthcare-dashboard.git
cd healthcare-dashboard
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Usage

### Navigation
Use the sidebar to navigate between different sections:
- Dashboard
- Patient Management
- Appointments
- Medical Records
- Staff Management
- Analytics

### Responsive Design
The dashboard is fully responsive and works on:
- Desktop (1920px and above)
- Tablet (768px - 1024px)
- Mobile (Below 768px)

## Customization

### Colors
The dashboard uses a purple gradient theme. To customize colors, edit the CSS files:
- Primary gradient: `#667eea` to `#764ba2`
- Success: `#48bb78`
- Warning: `#f6ad55`
- Danger: `#f56565`

### Adding New Pages
1. Create a new component in `src/pages/`
2. Add the route in `App.js`
3. Add navigation item in `Sidebar.js`

## API Integration

The dashboard is ready for backend integration. Replace mock data with API calls using Axios:

```javascript
import axios from 'axios';

// Example
const fetchPatients = async () => {
  try {
    const response = await axios.get('/api/patients');
    setPatients(response.data);
  } catch (error) {
    console.error('Error fetching patients:', error);
  }
};
```

## Features Coming Soon

- User authentication and authorization
- Real-time notifications
- Advanced filtering and search
- Export to PDF/Excel
- Dark mode
- Multi-language support
- Mobile app version

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support or questions, please open an issue on GitHub.

---

**Built with ❤️ for healthcare professionals**
