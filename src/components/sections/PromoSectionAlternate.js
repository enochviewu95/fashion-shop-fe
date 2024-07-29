export default function PromoSectionAlternate({
  heading,
  text,
  imgSrc,
  background = true,
}) {
  return (
    <section className="w-full h-[100vh] relative">
      <div className="absolute w-full h-full">
        <img
          className="w-full h-full object-cover object-center filter brightness-50"
          src={imgSrc}
          alt={heading}
          loading="lazy"
        />
      </div>
      <div className="w-full relative h-full flex flex-col justify-center">
        <div className="text-center rounded h-full bg-black/10 flex flex-col justify-center content-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-200 sm:text-6xl">
            {heading}
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-200">{text}</p>
        </div>
      </div>
    </section>
  );
}
