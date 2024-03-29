import Image from "next/image";

export const Header = () => {
  return (
    <>
      <div className="flex justify-between bg-gray-900 px-4">
        <div className="relative aspect-video w-44">
          <Image
            src="/logo.svg"
            alt="Talk to me!"
            fill
            className="object-contain"
          />
        </div>

        <div className="relative aspect-square w-11">
          <Image
            src="/hero.svg"
            alt="Hero Code"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </>
  );
};
