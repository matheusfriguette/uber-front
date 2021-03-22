import ButtonLink from "components/core/button-link";

const BannerSection = ({ data }) => {
  const { title, description, image, buttonLink } = data;

  return (
    <section className="bg-black">
      <div className="lg:container">
        <div className="py-14 px-8 lg:p-16">
          <div className="grid grid-cols-8 lg:grid-cols-12 gap-9 items-center">
            <div className="col-span-8 lg:col-span-5">
              <div>
                <h1 className="font-title font-medium text-white text-3xl sm:text-4xl lg:text-6xl leading-tight">
                  {title}
                </h1>
              </div>
              <div className="mt-6 lg:mt-9">
                <p className="font-body font-normal text-white leading-normal">
                  {description}
                </p>
              </div>
              {buttonLink && (
                <div className="mt-8">
                  <ButtonLink label={buttonLink.label} href={buttonLink.href} />
                </div>
              )}
            </div>
            <div className="col-span-8 row-start-1 lg:col-start-7 lg:col-span-6">
              <img src={image.src} alt={image.alt} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
