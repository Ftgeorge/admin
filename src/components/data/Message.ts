// --- Type Definitions ---
export type MessageStatus = "pending" | "progress";

export interface Message {
  name: string;
  title: string;
  description: string;
  status: MessageStatus;
}
// --- End Type Definitions ---

export const messages: Message[] =[
    {name: 'John Doe',
        title: 'Support Request',
        description: 'I need help with my account.',
        status: 'pending'
    },
    {name: 'Jane Smith',
        title: 'Bug Report',
        description: 'The app crashes on login.',
        status: 'progress'
    },
]