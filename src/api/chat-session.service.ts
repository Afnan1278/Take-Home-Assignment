import axios from 'axios';
import apiClient from './axiosClient'; // Adjust the import path based on your project structure

export const chatSessionService = {
  getChatSession: async (startDate?: string, endDate?: string) => {
    try {
      const params: Record<string, any> = {};
      if (startDate) params.start_date = startDate;
      if (endDate) params.end_date = endDate;

      const response = await apiClient.get('/challenge/chat_sessions/', { params });
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response) {
          throw new Error(`Server error with status: ${error.response.status}`);
        } else if (error.request) {
          throw new Error('Network error: No response received');
        } else {
          throw new Error(`Error: ${error.message}`);
        }
      }
      throw new Error('An unexpected error occurred');
    }
  },
};
