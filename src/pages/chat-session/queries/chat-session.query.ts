import { useQuery } from '@tanstack/react-query';
import { chatSessionService } from '../../../api/chat-session.service';

const useChatSessionQueries = () => {
  const useGetChatSession = (startDate?: string, endDate?: string) => {
    return useQuery({
      queryKey: ['chat-session', startDate, endDate],
      queryFn: () => chatSessionService.getChatSession(startDate, endDate),
      retry: false,
      refetchOnWindowFocus: false,
    });
  };

  return {
    useGetChatSession,
  };
};

export default useChatSessionQueries;
