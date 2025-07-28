
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

const Portfolio = () => {
  const { t } = useLanguage();

  const portfolioItems = [
    {
      title: "Corporate T-Shirts",
      category: "Screen Printing",
      image: "/lovable-uploads/b2561094-116e-4708-8f41-800c762edda3.png",
      description: "Custom branded t-shirts for your business"
    },
    {
      title: "Sports Team Jerseys",
      category: "Embroidery",
      image: "/lovable-uploads/fe01d45c-c14d-49e1-ae6a-a167cb88da21.png",
      description: "Professional jerseys with team logos"
    },
    {
      title: "Event Merchandise",
      category: "Heat Transfer",
      image: "/lovable-uploads/b442073e-aa26-4e80-93aa-a8095ef7a7c4.png",
      description: "Conference merchandise and promotional items"
    },
    {
      title: "Custom Hoodies",
      category: "Screen Printing",
      image: "/lovable-uploads/2e7b7766-ab98-4436-a8f3-0415f6440c63.png",
      description: "Personalized hoodies for local business"
    },
    {
      title: "Uniform Embroidery",
      category: "Embroidery",
      image: "/lovable-uploads/8a93ded7-5a49-4c70-bc22-aad75bbd0b43.png",
      description: "Professional uniform customization"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            {t('portfolio.title')}
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            {t('portfolio.description')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <Card key={index} className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="relative overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="bg-blue-600 text-xs px-2 py-1 rounded-full">{item.category}</span>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-slate-800 mb-2">{item.title}</h3>
                <p className="text-slate-600">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
