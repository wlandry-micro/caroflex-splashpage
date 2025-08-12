
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const Contact = () => {
  const { t } = useLanguage();

  const [statusText, setStatusText] = useState("");
  const [statusType, setStatusType] = useState<"success" | "error" | "">("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const res = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatusType("success");
        setStatusText("Thank you! Your quote request has been sent.");
        form.reset();
      } else {
        const errorData = await res.json().catch(() => null);
        setStatusType("error");
        setStatusText(
          (errorData && (errorData.error || errorData.message)) ||
            "Oops! There was a problem sending your request."
        );
      }
    } catch (error) {
      setStatusType("error");
      setStatusText("Network error. Please try again later.");
    }
  };

  return (
    <section id="quote-form" className="py-20 bg-slate-900">
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
            <CardContent>
              <form id="quote-form" action="https://formspree.io/f/movlrwjy" method="POST" onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="text-slate-700">Your Name</Label>
                    <Input id="name" name="name" placeholder="Your Name" className="mt-1" required />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-slate-700">Your Email</Label>
                    <Input id="email" name="email" type="email" placeholder="Your Email" className="mt-1" required />
                  </div>
                </div>
                <div>
                  <Label htmlFor="message" className="text-slate-700">Your Message</Label>
                  <Textarea id="message" name="message" placeholder="Your Message" className="mt-1 min-h-[120px]" required />
                </div>
                <input type="hidden" name="_subject" value="New Quote Request from Caroflex.ca" />
                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg">Get Quote</Button>
                <p id="form-status" className={`mt-2 font-semibold ${statusType === "success" ? "text-emerald-500" : statusType === "error" ? "text-red-500" : "text-slate-500"}`}>{statusText}</p>
              </form>
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
