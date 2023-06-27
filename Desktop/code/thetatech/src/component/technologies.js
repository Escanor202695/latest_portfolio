export default function Technologies() {
  const images = [
    {
      link: "https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg",
    },
    {
      link: "https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg",
    },
    {
      link: "https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg",
    },
    {
      link: "https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg",
    },
    {
      link: "https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg",
    },
    {
      link: "https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg",
    },
    {
      link: "https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg",
    },
    {
      link: "https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg",
    },
    {
      link: "https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg",
    },
    {
      link: "https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg",
    },
  ];
  return (
    <div className="bg-white py-24 sm:py-28 mb-[5rem]" id="tech">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-3xl mb-16 font-semibold leading-8 text-gray-900">
          Technologies That We Use
        </h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          {images.map((i) => (
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 my-6"
              src={i.link}
              alt="Tech We Work With"
              width={158}
              height={48}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
