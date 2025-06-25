
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shirt, Image, Tag } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Shirt,
      title: "Screen Printing",
      description: "High-quality screen printing for bulk orders. Perfect for events, teams, and promotional merchandise.",
      features: ["Vibrant colors", "Durable prints", "Cost-effective for large orders", "Multiple color options"]
    },
    {
      icon: Image,
      title: "Embroidery",
      description: "Premium embroidery services for a professional, polished look. Ideal for corporate apparel and uniforms.",
      features: ["Professional finish", "Long-lasting", "Corporate logos", "Multiple thread colors"]
    },
    {
      icon: Tag,
      title: "Heat Transfer",
      description: "Perfect for small orders and detailed designs. Great for personalized gifts and custom artwork.",
      features: ["Detailed designs", "Photo quality", "Small order friendly", "Quick turnaround"]
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Our Services
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            From screen printing to embroidery, we offer comprehensive custom apparel solutions 
            for all your printing needs.
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
                <CardTitle className="text-2xl text-slate-800">{service.title}</CardTitle>
                <CardDescription className="text-slate-600 text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-slate-700">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      {feature}
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
