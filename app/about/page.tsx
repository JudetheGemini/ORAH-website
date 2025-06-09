export default function AboutPage() {
  return (
    <div className="flex flex-col items-center justify-center py-12 gap-6 mt-6">
      <div className="flex flex-col items-center gap-6 px-4">
        <span className="font-inter text-darkBlue text-2xl md:text-5xl font-black max-w-5xl text-center tracking-wide leading-8 md:leading-16">
          About ORAH
        </span>
        <span className="font-inter text-darkBlue text-center">
          ORAH is dedicated to fostering a community focused on ethical AI governance, education, advocacy, and innovation in Ottawa.
        </span>
      </div>
    </div>
  );
}