
export default function HeroSection({ banner }) {
  console.log('Banner image',banner.imageUrl)
  const bannerUrl = process.env.REACT_APP_BASE_URL + banner.imageUrl.replace(/\\/g, "/")

  return (
    <div className="py-24 lg:px-8" style={{ backgroundImage: `url(${bannerUrl})`, backgroundRepeat: 'no-repeat',backgroundSize:'cover' }}>
      <div className="mx-auto max-w-2xl py-32">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            {banner.title}
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            {banner.description}
          </p>
        </div>
      </div>
    </div>
  );
}
