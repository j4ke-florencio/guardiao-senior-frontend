
export interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export interface TeamMember {
  name: string;
  role: string;
  avatar: string;
}

export interface Resource {
    title: string;
    description: string;
    icon: string;
}