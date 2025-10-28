interface Course {
  id: string;
  title: string;
  description: string;
  creator_id: string;
}

type CourseWithRelations = Course & {
  creator?: User;
  lessons: Lesson[];
};
