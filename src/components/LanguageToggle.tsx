
import { Button } from "@/components/ui/button";
import { Languages } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'fr' : 'en');
  };

  return (
    <Button
      onClick={toggleLanguage}
      variant="outline"
      size="sm"
      className="fixed top-4 right-4 z-50 bg-white/90 backdrop-blur-sm border-slate-300 text-slate-700 hover:bg-white hover:text-slate-900 shadow-lg"
    >
      <Languages className="w-4 h-4 mr-2" />
      {language === 'en' ? 'FR' : 'EN'}
    </Button>
  );
};

export default LanguageToggle;
