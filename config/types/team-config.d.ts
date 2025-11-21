import { IdCardProps } from '@/app/components/people-involved/id-card';

interface RefactoredIdCardProps extends Omit<IdCardProps, 'description'> {
  year: string;
  course: string;
  roles: string[];
}

export type TeamConfig = {
  team: RefactoredIdCardProps[];
};
