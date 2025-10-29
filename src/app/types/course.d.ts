interface Course {
  id: string;
  title: string;
  description: string;
  creator_id: string;
  created_at?: string;
}

type CourseWithRelations = Course & {
  creator?: User;
  lessons: Lesson[];
};
