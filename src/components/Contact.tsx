
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Contact = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t('contact.title')}
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            {t('contact.description')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-white border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl text-slate-800">{t('contact.form.title')}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name" className="text-slate-700">{t('contact.form.name')}</Label>
                  <Input id="name" placeholder={t('contact.form.name')} className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="email" className="text-slate-700">{t('contact.form.email')}</Label>
                  <Input id="email" type="email" placeholder="your@email.com" className="mt-1" />
                </div>
              </div>
              
              <div>
                <Label htmlFor="phone" className="text-slate-700">{t('contact.form.phone')}</Label>
                <Input id="phone" placeholder="(555) 123-4567" className="mt-1" />
              </div>
              
              <div>
                <Label htmlFor="service" className="text-slate-700">{t('contact.form.service')}</Label>
                <Input id="service" placeholder="Screen Printing, Embroidery, Heat Transfer..." className="mt-1" />
              </div>
              
              <div>
                <Label htmlFor="message" className="text-slate-700">{t('contact.form.message')}</Label>
                <Textarea 
                  id="message" 
                  placeholder={t('contact.form.messagePlaceholder')}
                  className="mt-1 min-h-[120px]"
                />
              </div>
              
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg">
                {t('contact.form.submit')}
              </Button>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-slate-800 border-slate-700 text-white">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-blue-400 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{t('contact.visit.title')}</h3>
                    <p className="text-slate-300">
                      276 Marie St.<br />
                      Beresford, NB E8K 1P3
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-slate-700 text-white">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-blue-400 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{t('contact.call.title')}</h3>
                    <p className="text-slate-300 text-lg">(506) 350-1233</p>
                    <p className="text-slate-400">Monday - Thursday: 9am - 4pm</p>
                    <p className="text-slate-400">Closed on Friday, Saturday & Sunday</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-slate-700 text-white">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-blue-400 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{t('contact.email.title')}</h3>
                    <p className="text-slate-300">design@caroflex.ca</p>
                    <p className="text-slate-400">We respond within 24 hours</p>
                  </div>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
