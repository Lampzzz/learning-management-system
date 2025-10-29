type Role = 'admin' | 'student' | 'instructor';

interface User {
  id: string;
  username: string;
  email: string;
  password: string;
  role: Role;
  created_at?: string;
}
