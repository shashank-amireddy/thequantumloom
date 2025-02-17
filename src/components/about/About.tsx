// TODO : update about

import { Avatar} from "../ui";
import { Lucide } from "../icons";
import '../../styles/globals.css';
export default () => {
  return (
    <div className="flex flex-col items-start gap-6 lg:gap-8 px-3 lg:px-6 py-4">
      <div className="flex flex-row items-center gap-4">
        <Avatar src="/Group1.svg" alt="profile-picture">
          <Lucide.IconUser className="size-2/3" />
        </Avatar>

        <div className="flex flex-col items-start gap-2">
          <h1 className="font-medium text-lg lg:text-xl">Shashank Reddy</h1>
          <h2 className="font-medium text-2xl lg:text-3xl">a.k.a <span className="text-primary-10">Quan7umL00m</span></h2>
        </div>
      </div>

      <div>
      I am an undergraduate student with a strong foundation in computer science. My experience includes competitive programming, application development, and web development, along with active participation in CTF competitions. I am committed to expanding my expertise, embracing new challenges, and contributing to advancements in the field.
      </div>

      
    </div>
  );
};
