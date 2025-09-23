
import { auth } from './firebase';

const API_BASE_URL = 'https://get-dashboard-data-uc.a.run.app';

const getAuthToken = async () => {
  const user = auth.currentUser;
  if (!user) {
    throw new Error('User not authenticated');
  }
  return await user.getIdToken();
};

export const fetchDashboardData = async () => {
  const token = await getAuthToken();
  const response = await fetch(API_BASE_URL, {
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch dashboard data');
  }

  return await response.json();
};
