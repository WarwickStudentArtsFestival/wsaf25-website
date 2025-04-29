import IdCard from './id-card';
import AvatarImage from '@/assets/people/avatar.jpg';
import organisers from '@/app/crew/organisers';

export default function PeopleInvolved({}) {
  return (
    <div className="flex text-white justify-center sm:mx-16 flex-wrap mb-4">
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
      <IdCard
        name="You?"
        role="Volunteer"
        image={AvatarImage}
        emailDescription
      />
    </div>
  );
}
