import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <div className="bg-navy">
      <div>
        <div className=" gap-4 md:gap-16 bg-brand-200 md:py-16 lg:py-32 md:px-12 lg:px-24 items-center ">
          <div className="flex justify-center items-center max-w-[1200px] mx-auto">
            <div className="flex flex-col justify-between items-center text-xl font-serif w-full">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
