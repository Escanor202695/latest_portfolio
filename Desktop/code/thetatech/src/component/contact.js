export default function Contact() {
  return (
    <div className="flex min-h-full flex-1" id="contact">
      <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="mx-auto w-1/2 lg:w-96">
          <div>
            <h2 className="mt-8 text-5xl font-bold leading-9 tracking-tight text-gray-900">
              Contact Us
            </h2>
            <p className="mt-2 text-sm leading-6 text-gray-500">
              <p
                href="#"
                className="text-lg font-semibold text-indigo-600 hover:text-indigo-500 mb-[2rem] mt-3"
              >
                Get In Touch
              </p>
              <p className="my-3 text-[.9rem]">
                <span className="font-bold mr-2 text-black">Email: </span>{" "}
                contact@thetaitsolutions.com
              </p>
              <p  className="my-3 text-[.9rem]">
                <span className="font-bold mr-2 text-black">
                  Registration Number:{" "}
                </span>{" "}
                66392201
              </p>
              <p  className="my-3 text-[.9rem]">
                <span className="font-bold mr-2 text-black">
                  Tax Identification:{" "}
                </span>{" "}
                112844742
              </p>
              <p  className="my-3 text-[.9rem]">
                <span className="font-bold mr-2 text-black">Address: </span>{" "}
                Theta Technology Consulting, Novi Sad, Serbia
              </p>
            </p>
          </div>
        </div>
      </div>
      <div className="relative hidden w-0 flex-1 lg:block">
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1496917756835-20cb06e75b4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80"
          alt=""
        />
      </div>
    </div>
  );
}
