
import { Shirt } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-slate-950 text-slate-300 py-12">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="flex justify-center items-center mb-6">
            <div className="p-2 bg-blue-600 rounded-lg mr-3">
              <Shirt className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-white">
              Caro<span className="text-blue-400">Flex</span>
            </span>
          </div>
          
          <p className="text-slate-400 mb-6 max-w-2xl mx-auto">
            {t('footer.description')}
          </p>
          
          <div className="flex justify-center space-x-8 mb-8 text-sm">
            <a href="#services" className="hover:text-blue-400 transition-colors">{t('footer.services')}</a>
            <a href="#portfolio" className="hover:text-blue-400 transition-colors">{t('footer.portfolio')}</a>
            <a href="#contact" className="hover:text-blue-400 transition-colors">{t('footer.contact')}</a>
            <a href="#quote" className="hover:text-blue-400 transition-colors">{t('footer.quote')}</a>
          </div>
          
          <div className="border-t border-slate-800 pt-8">
            <p className="text-slate-500">
              {t('footer.copyright')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
