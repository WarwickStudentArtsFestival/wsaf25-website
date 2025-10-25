import { IdCardProps } from '@/app/components/people-involved/id-card';

interface RefactoredIdCardProps extends Omit<IdCardProps, 'description'> {
  year: string;
  course: string;
}

export type OrganisersConfig = {
  organisers: RefactoredIdCardProps[];
};
