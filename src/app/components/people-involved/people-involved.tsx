import IdCard from './id-card';
import AvatarImage from '@/assets/people/avatar.jpg';
import organisers from '@/app/components/people-involved/organisers';

export default function PeopleInvolved({}) {
  return (
    <div className="mb-4 w-full mx-auto xl:px-16">
      <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 2xl:grid-cols-10 gap-2 px-2 text-white justify-center">
        {organisers.map((person) => (
          <IdCard
            key={person.name}
            name={person.name}
            year={person.year}
            course={person.course}
            role="Organiser"
            image={person.image}
          />
        ))}
        <div className="sm:hidden">
          <IdCard
            name="You?"
            role="Volunteer"
            image={AvatarImage}
            emailDescription
          />
        </div>
      </div>
      <div className="sm:block hidden  sm:w-1/5 lg:w-1/6 xl:w-1/7 2xl:w-1/10 mx-auto m-4">
        <IdCard
          name="You?"
          role="Volunteer"
          image={AvatarImage}
          emailDescription
        />
      </div>
    </div>
  );
}
