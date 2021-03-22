import Icon from "components/core/icon";
import Link from "components/core/link";

const CardsSection = ({ data }) => {
  const { title, subtitle, cards } = data;

  return (
    <section className="bg-white">
      <div className="lg:container">
        <div className="py-14 px-8 lg:p-16">
          {title && (
            <div>
              <h2 className="font-body font-medium text-gray text-2xl sm:text-3xl lg:text-4xl">
                {title}
              </h2>
            </div>
          )}
          {subtitle && (
            <div className="mt-4 sm:mt-5 lg:mt-6">
              <p className="font-body text-gray">{subtitle}</p>
            </div>
          )}
          {cards && (
            <div className="mt-9">
              <div className="grid grid-cols-12 gap-9">
                {cards.map((card) => (
                  <div className="col-span-12 sm:col-span-6 lg:col-span-4">
                    <div>
                      {card.icon && (
                        <div>
                          <Icon name={card.icon} />
                        </div>
                      )}
                      {card.image && (
                        <div>
                          <img src={card.image.src} alt={card.image.alt} />
                        </div>
                      )}
                      {card.title && (
                        <div className="mt-5">
                          <h3 className="font-body font-medium text-gray text-lg">
                            {card.title}
                          </h3>
                        </div>
                      )}
                      {card.description && (
                        <div className="mt-3">
                          <p className="font-body font-light">
                            {card.description}
                          </p>
                        </div>
                      )}
                      {card.link && (
                        <div className="mt-8">
                          <Link href={card.link.href} label={card.link.label} />
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CardsSection;
