
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shirt, Image, Tag } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Shirt,
      titleKey: 'services.screenPrint.title',
      descriptionKey: 'services.screenPrint.description',
      features: [
        'services.screenPrint.feature1',
        'services.screenPrint.feature2',
        'services.screenPrint.feature3',
        'services.screenPrint.feature4'
      ]
    },
    {
      icon: Image,
      titleKey: 'services.embroidery.title',
      descriptionKey: 'services.embroidery.description',
      features: [
        'services.embroidery.feature1',
        'services.embroidery.feature2',
        'services.embroidery.feature3',
        'services.embroidery.feature4'
      ]
    },
    {
      icon: Tag,
      titleKey: 'services.heatTransfer.title',
      descriptionKey: 'services.heatTransfer.description',
      features: [
        'services.heatTransfer.feature1',
        'services.heatTransfer.feature2',
        'services.heatTransfer.feature3',
        'services.heatTransfer.feature4'
      ]
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            {t('services.title')}
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            {t('services.description')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-blue-100 rounded-full">
                    <service.icon className="w-8 h-8 text-blue-600" />
                  </div>
                </div>
                <CardTitle className="text-2xl text-slate-800">{t(service.titleKey)}</CardTitle>
                <CardDescription className="text-slate-600 text-base leading-relaxed">
                  {t(service.descriptionKey)}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((featureKey, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-slate-700">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      {t(featureKey)}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
