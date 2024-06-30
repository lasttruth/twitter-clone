import {
  HomeIcon,
  HashtagIcon,
  InboxIcon,
  BookmarkIcon,
  ClipboardListIcon,
  BellIcon,
  UserIcon,
  DotsCircleHorizontalIcon,
} from "@heroicons/react/outline";
import Image from "next/image";

export default function Sidebar() {
  return (
    <div className="h-full hidden sm:flex ml-4 flex-col  fixed xl:ml-24">
      <nav className=" h-full relative xl:space-y-1.5">
        <div className=" flex justify-center items-center xl:justify-start py-3 xl:p-3">
          <Image src={"/assets/twitter-logo.png"} width={34} height={34} />
        </div>
        <SideBarLink Icon={HomeIcon} text={"Home"} />
        <SideBarLink Icon={HashtagIcon} text={"Explore"} />
        <SideBarLink Icon={BellIcon} text={"Notification"} />
        <SideBarLink Icon={InboxIcon} text={"Messages"} />
        <SideBarLink Icon={BookmarkIcon} text={"Bookmarks"} />
        <SideBarLink Icon={UserIcon} text={"Profile"} />
        <SideBarLink Icon={DotsCircleHorizontalIcon} text={"More"} />
        <button
          className="hidden xl:inline bg-[#1d9bf0] 
        rounded-full h-[52px] mt-2 w-[200px] text-lg font-bold"
        >
          Tweet
        </button>
        <div className="absolute bottom-0">User</div>
      </nav>
    </div>
  );
}

function SideBarLink({ text, Icon }) {
  return (
    <li className=" hoverAnimation flex mb-3 justify-center items-center text-xl space-x-3 xl:justify-start">
      <Icon className="h-7" />
      <span className="hidden xl:inline">{text}</span>
    </li>
  );
}
